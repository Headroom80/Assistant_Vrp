import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Client} from "../models/client";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'api/clients';
  constructor(private http:HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
}
