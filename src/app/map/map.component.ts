import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {ClientService} from "../services/client.service";
import {AdresseGouvService} from "../services/adresse-gouv.service";
@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;

  constructor(
    private clientService: ClientService,
    private adresseGouvService: AdresseGouvService
  ) {}

  ngOnInit(): void {
    this.initMap();

    this.clientService.getClients().subscribe(clients => {
      clients.forEach(client => {
        const address = client.adresse;
        this.adresseGouvService.getCoordinates(address).subscribe({
          next: (coords) => {
            console.log(`Coordinates for ${address}:`, coords);
            if (this.map && coords.lat !== 0 && coords.lon !== 0) {
              this.addMarker(coords.lat, coords.lon, `${client.nom} ${client.prenom}`);
            }
          },
          error: (err) => {
            console.error(`Failed to fetch coordinates for address: ${address}`, err);
          }
        });
      });
    });
  }
//initialiser la map
  private initMap(): void {
    this.map = L.map('map').setView([46.603354, 1.888334], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }
//ajouter les marqueurs sur la map en fonction des coordonées client
  private addMarker(lat: number, lon: number, popupText: string): void {
    if (this.map) {
      L.marker([lat, lon]).addTo(this.map).bindPopup(popupText);
    }
  }
}
