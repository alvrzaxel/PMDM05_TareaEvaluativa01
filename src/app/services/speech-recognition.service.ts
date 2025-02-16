import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CameraService } from './camera.service';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  public latestPhotoUrl: string = ''; // URL de la última foto capturada
  private photoTaken: boolean = false; // Estado que indica si ya se ha tomado una foto

  constructor(private cameraService: CameraService) { }

  // Inicia el reconocimiento de voz y escucha el comando "foto" para abrir la cámara
  public async startRecognition() {

    try {
      
      // Solicitar permisos para el reconocimiento de voz
      console.log('Requesting permissions...');
      const permission = await SpeechRecognition.requestPermissions();

      // Verificar si el permiso fue concedido
      if (!permission.speechRecognition) {
        console.error('Speech recognition permission denied');
        return;
      }
      
      // Inicia el reconocimiento de voz
      console.log('Starting speech recognition...');
      const result = await SpeechRecognition.start({
        language: "es-ES", // Idioma en el que se realizarán los comandos
        maxResults: 2, // Número máximo de resultados a capturar
        partialResults: true, // Resultados parciales mientras se habla
      });
      
      console.log('Speech recognition started', result);

      this.photoTaken = false;
      
      // Escucha los resultados parciales del reconocimiento de voz
      SpeechRecognition.addListener("partialResults", (data: any) => {
        console.log("Partial results received:", data);

        // Verifica si se encontraron coincidencias
        if (data.matches && data.matches.length > 0) {
          const transcribedText = data.matches[0]; // Texto transcrito de la voz
          SpeechRecognition.stop();
          console.log("Transcribed text:", transcribedText);

          // Si el texto transcrito es "fotos", abre la cámara
          if (transcribedText.toLowerCase() === 'foto') {
            this.capturePhoto();
          }

        } else {
          console.log("No matches found.");
          this.startRecognition(); // Reintentar reconocimiento
        }
      });
  
    } catch (error) {
      console.error('Error starting recognition:', error);
    }
  }

  // Captura una foto y obtiene la URL web de la última foto capturada
  private async capturePhoto() {
    try {
      // Llamada a la cámara directamente sin usar el servicio
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Uri, // Obtener la URI de la foto
        source: CameraSource.Camera, // Usar la cámara para capturar la imagen
        quality: 100, // Calidad máxima de la foto
      });
  
      // Obtiene la ruta de la imagen (webPath) y la asigna a la propiedad latestPhotoUrl
      this.latestPhotoUrl = image.webPath ? image.webPath : '';
      console.log('Foto capturada, webPath:', this.latestPhotoUrl); // Muestra la URL de la foto
  
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }

}
