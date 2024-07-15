import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Client} from "../models/client";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.apiUrl);
  }

  getClient(id: number): Observable<Client> {
    const url = `${environment.apiUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(environment.apiUrl, client);
  }
  updateClient(client: Client): Observable<any> {
    return this.http.put(environment.apiUrl, client);
  }
  deleteClient(id: number): Observable<Client> {
    const url = `${environment.apiUrl}/${id}`;
    return this.http.delete<Client>(url);
  }

}
