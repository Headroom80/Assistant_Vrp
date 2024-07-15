import { Injectable } from '@angular/core';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Client} from "../models/client";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http:HttpClient) { }

  getClient():Observable<Client[]>{
    return this.http.get<Client[]>(environment.apiUrl);

  }
}
