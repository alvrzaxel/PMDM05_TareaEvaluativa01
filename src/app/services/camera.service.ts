import { Capacitor } from '@capacitor/core';
import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

import { StorageService } from './storage.service';
import { Platform } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  urlsList: string[] = []; // Lista de URLs de las imágenes
  pathList: string[]= []; // Lista de rutas de los ficheros locales de las imágenes

  // Dependencias necesarias
  constructor(
    private storage: StorageService,
    private platform: Platform
  ) {
    // Carga la lista de fotos guardadas al inciar
    this.loadSaved();
  }

  // Método para recuperar las fotos previamente guardadas desde el almacenamiento local
  private async loadSaved() {

    // Recupera la lista de rutas guardadas desde el servicio de almacenamiento local
    const photoList = await this.storage.getObject("paths");

    // Si no hay rutas guardadas, inicializa una lista vacía
    // Con parse, separamos las rutas
    this.pathList = JSON.parse(photoList.value) || []; 

    // Variable para almacenar la ruta final de la imagen
    let webviewPath: string;

    // Recorre cada ruta guardada en pathList
    for (let photo of this.pathList) {
      // Si la app no está en un dispositivo híbrido (navegador)
      if (!this.platform.is("hybrid")) {
          // Lee el archivo de imagen desde el sistema de archivos
          const readFile = await Filesystem.readFile({
              path: photo, // Ruta del archivo
              directory: Directory.Data // Directorio donde se encuentra el archivo
          });

          // Convierte la imagen a una cadena base64 para poder mostrarla en el navegador
          webviewPath = `data:image/jpeg;base64,${readFile.data}`;

      } else {
         // Si está en un dispositivo híbrido, obtiene la URI del archivo usando Capacitor
        webviewPath = Capacitor.convertFileSrc(photo);
      }

      // Añade la ruta (base64 o URI) a la lista de URLs para mostrarla
      this.urlsList.push(webviewPath);
    }
  }

  // Método getter que retorna la lista de URLs de las imágenes
  public getListaUrl(): string[] {
    return this.urlsList;
  }

  // Método getter que retorna la lista la lista de Paths de las imágenes
  public getListPath(): string[] {
    return this.pathList;
  }

  // Método para capturar una foto utilizando la cámara
  public async takePhoto() {
    // Obtiene la foto desde la cámara del dispositivo
    const image = await Camera.getPhoto({
      quality: 90, // Calidad de la imagen, de 0 a 100
      allowEditing: false, // No permite editar la imagen después de capturarla
      source: CameraSource.Camera, // Fuente de la imagen: cámara del dispositivo
      resultType: CameraResultType.Base64 // Tipo de resultado: imagen en formato base64
    });

    // Añade la imagen en formato base64 a la lista de URLs
    // Necesita añadir la cabecera delante para convertir en formato URI
    this.urlsList.push("data:image/jpeg;base64," + image.base64String);

    // Guarda la imagen en el sistema de archivos del dispositivo
    this.savePhoto(image);
  }

  // Método para guardar una foto en el sistema de archivos
  private async savePhoto(image: any) {

    // Extrae la cadena base64 de la imagen tomada
    let base64Data = image.base64String;

    // Crea nombre único para el archivo usando la fecha/hora actual (en milisegundos) + extension .jpeg
    const fileName = new Date().getTime() + '.jpeg';

    // Escribe el archivo en el sistema de archivos del dispositivo en el directorio 'Data'
    const savedFile = await Filesystem.writeFile({
      path: fileName, // Define el nombre y la ruta del archivo
      data: base64Data, // Define los datos que se escribirán (la imagen en formato base64)
      directory: Directory.Data // Directorio donde se guardará el archivo
    });

    // Variable para almacenar la ruta final del archivo
    let path: string;

    // Detecta el dispositivo donde se ejecuta la app
    // Obtiene la URI completa del archivo guardado
    if (this.platform.is('hybrid')) {
      path = savedFile.uri; // Para dispositivos híbridos, utiliza la URI generada por Capacitor
      console.log("Hybrid URI: " + savedFile.uri);
    } else {
      path = fileName; // En un navegador, la ruta es solo el nombre del archivo
      console.log("Navegador path: " + fileName);
    }

    // Añade la ruta del archivo a la lista de rutas
    this.pathList.push(path);

    // Guarda la lista de rutas de imágenes en el almacenamiento local
    this.storage.setObject("paths", this.pathList);
  }
}
