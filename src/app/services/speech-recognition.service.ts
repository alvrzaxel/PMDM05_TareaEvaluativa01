import { Injectable, OnInit } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  public latestPhotoUrl: string = ''; // URL de la última foto capturada
  private isProcessing: boolean = false;

  constructor() { }

  // Inicia el reconocimiento de voz y escucha el comando "foto" para abrir la cámara
  public async startRecognition() {

    try {
      
      // Solicitar permisos para el reconocimiento de voz
      console.log('Checking permissions...');
      const permissionStatus = await SpeechRecognition.checkPermissions();

      // Si no se tiene permiso, se solicita
      if (!permissionStatus.speechRecognition) {
        console.log('Requesting permissions...');
        const permission = await SpeechRecognition.requestPermissions();

        // Si el permiso no es concedido, se muestra un error y se detiene el proceso
        if (!permission.speechRecognition) {
          console.error('Speech recognition permission denied');
          return;
        }
      }
      
      // Inicia el reconocimiento de voz, se establece el idioma y se configuran los resultados
      console.log('Starting speech recognition...');
      const result = await SpeechRecognition.start({
        language: "es-ES",
        maxResults: 2,
        partialResults: true,
      });
      
      console.log('Speech recognition started', result);
      
      // Escucha los resultados parciales del reconocimiento de voz
      SpeechRecognition.addListener("partialResults", (data: any) => {
        console.log("Partial results received:", data);

        // Si ya se está procesando una foto, evitar iniciar otra
        if (this.isProcessing) return;

        // Verifica si se encontraron coincidencias
        if (data.matches && Array.isArray(data.matches)) {
          const transcribedText = data.matches[0]?.toString().toLowerCase() || '';
          console.log("Transcribed text:", transcribedText);

          // Si el comando de voz es "foto", se captura la imagen
          if (transcribedText === 'foto') {
            this.isProcessing = true;
            SpeechRecognition.stop(); // Detiene el reconocimiento de voz
            this.capturePhoto(); // Llama a la función que captura la foto
          }
        } else {
          console.log("No valid speech detected.");
        }
      });
  
    } catch (error) {
      console.error('Error starting recognition:', error);
    }
  }

  // Captura una foto y obtiene la URL (WebPath) de la última foto capturada
  private async capturePhoto() {
    try {
      // Llamada a la cámara para capturar la imagen
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Uri, // Obtiene la URI de la foto
        source: CameraSource.Camera,
        quality: 100,
      });
  
      // Asigna la URL de la foto capturada
      this.latestPhotoUrl = image.webPath ? image.webPath : '';
      console.log('Foto capturada, webPath:', this.latestPhotoUrl);
  
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }

  // Borra la foto si sale y vuelve a entrar a la vista "voice"
  clearPhoto() {
    console.log('Foto eliminada');
    this.latestPhotoUrl = ''; // Borra la foto
  }
}
