import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-test-address',
  standalone: true,
  imports: [],
  templateUrl: './test-address.component.html',
  styleUrl: './test-address.component.css'
})

export class TestAddressComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const address = '64 bd berthelot clermont-ferrand';
    const url = `https://api-adresse.data.gouv.fr/search/?q=${address}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    console.log( address);
    console.log(`URL: ${url}`);

    this.http.get<any>(url, { headers }).subscribe({
      next: (response) => {
        console.log('Response de l API:', response);
      },
      error: (error) => {
        console.error('Erreur : ', error);
      }
    });
  }
}
