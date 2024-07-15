import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import { GeoApiGouvAddressService, GeoApiGouvAddressResponse} from '@placeme/ngx-geo-api-gouv-address';
@Injectable({
  providedIn: 'root'
})
export class AdresseGouvService {
  private baseUrl = 'https://api-adresse.data.gouv.fr/search/?q=';

  constructor(private http: HttpClient) {}
//ne fonctionne pas erreur 404.
  getCoordinates(address: string): Observable<{ lat: number, lon: number }> {
    const url = `${this.baseUrl}${encodeURIComponent(address)}`;
    console.log(`Fetch des coordonées pour l'adresse :  ${address}`);
    console.log(`URL: ${url}`);

    return this.http.get<any>(url).pipe(
      map(response => {
        console.log('Response:', response);
        if (response.features && response.features.length > 0) {
          const feature = response.features[0];
          return { lat: feature.geometry.coordinates[1], lon: feature.geometry.coordinates[0] };
        } else {
          throw new Error('Pas de coordonées trouver');
        }
      }),
      catchError(error => {
        console.error(`Erreur de récupération des coordonées pour l'adresse : "${address}":`, error);
        return of({ lat: 0, lon: 0 });
      })
    );
  }
}
