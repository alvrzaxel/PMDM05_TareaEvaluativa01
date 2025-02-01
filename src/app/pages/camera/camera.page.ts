import { Component, OnInit } from '@angular/core';
import { MyModuleModule } from "../../components/my-module.module";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: false
})

// Definición de la clase para la página "Camera"
export class CameraPage implements OnInit{

	// URLs de las imágenes capturadas
	listImageUrl: string[] = [];
	
	// Dependencias necesarias
	constructor(public cameraService: CameraService) {}
	
	// Se ejecuta al inicializar el componente
	ngOnInit() {}
	
	// Método asincrónico que permite tomar una foto usando la cámara del dispositivo
	public async takePhoto() {

		// Captura una foto con la configuración especificada
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false, // No permite la edición de la imagen tras capturarla
			source: CameraSource.Camera, // // La foto se toma desde la cámara
			resultType: CameraResultType.Uri // Tipo de resultado (URI para obtener la ruta de la imagen)
		});
		
		// Muestra la información de la imagen capturada en la consola
		console.log(image);
		
		// Añade la ruta de la imagen capturada al array 'listImageUrl' para mostrarla en la vista
    	if (image.webPath) this.listImageUrl.unshift(image.webPath);
	}
}
