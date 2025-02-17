import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';
import { SpeechRecognitionService } from 'src/app/services/speech-recognition.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.page.html',
  styleUrls: ['./voice.page.scss'],
  standalone: false,
})
export class VoicePage implements OnInit {

  constructor(public recognitionService: SpeechRecognitionService) { }

  ngOnInit() {
    this.recognitionService.clearPhoto();
  }

  // Método para compartir la imagen cuando se presione el botón
  onShareImage() {
    // Obtiene la URL de la última foto tomada desde el servicio
    const webPath = this.recognitionService.latestPhotoUrl;

    if (webPath) {
      // Llamamos a la función del plugin Share para compartir la URL de la foto
      Share.share({
        title: 'Mira esta foto',
        text: 'Te comparto una foto: ',
        url: webPath,
        dialogTitle: 'Compartir foto',
      }).then(() => {
        console.log('La foto ha sido compartida');
      }).catch(error => {
        console.error('Error al compartir la foto', error);
      });
    } else {
      console.log('No hay foto para compartir');
    }
  }

}
