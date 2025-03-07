import { Zoom } from './../../../../node_modules/@types/leaflet/index.d';
import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.page.html',
  styleUrls: ['./leaflet.page.scss'],
  standalone: false,
})
export class LeafletPage implements OnInit {

  // Objeto mapa de Leaflet
  public map!: L.Map;

  // Ciudad a localizar en el mapa
  private city: string;

  // Coordenadas de la ciudad a buscar obtenidas de la API
  private coordinates: number[];
  
  // Incializa la ciudad a buscar
  constructor() {
    this.city = "Madrid"
    this.coordinates = [0, 0];
  }

  // Llamada a incializar el mapa
  ngOnInit() {
    this.initMap();
  }

  // Obtiene las coordenadas e inicializa el mapa con un marcador
  public async initMap() {

    // Obtiene las coordenadas de la ciudad antes de inicializar el mapa
    await this.getCoordinates(this.city);
    
    // Inicializa el mapa de Leaflet centrado en las coordenadas obtenidas
    this.map = L.map('map').setView([this.coordinates[0], this.coordinates[1]], 13);

    // Agrega las capas de tiles usando OpenStreetMap al mapa
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, // Zoom máximo
      attribution: '&copy; OpenStreetMap contributors' // Créditos de la fuente de los tiles
    }).addTo(this.map);

    // Crea un marcador en las coordenadas obtenidas y lo añade al mapa
    var marker = L.marker([this.coordinates[0], this.coordinates[1]]).addTo(this.map);

    // Asocia un popup al marcador con el nombre de la ciudad y sus coordenadas
    // Usamos etiquetas HTML para formatear el texto del popup
    marker.bindPopup(`<strong>${this.city}</strong> <em>${this.coordinates.toString()}</em>`).openPopup();
    
  }

  // Método para obtener las coordenadas de una ciudad a partir de la API de Nominatim
  private async getCoordinates(city: string)
  {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`);
    const data = await response.json();

    // Si la respuesta contiene datos, extrae las coordenadas
    if (data.length > 0) {
      const { lat, lon } = data[0]; // Latitud y longitud del primer resultado
      this.coordinates = [parseFloat(lat), parseFloat(lon)]; // Almacenamos el resultado
    } else {
      console.log("Ciudad no encontrada");
    }
  }

}
