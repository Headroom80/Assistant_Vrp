import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {Client} from "../models/client";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const clients = [
      { id: 1, nom: 'Dupont', prenom: 'Jean', dateVisite: '2023-07-13', adresse: '123 rue de Paris' },
      { id: 2, nom: 'Durand', prenom: 'Marie', dateVisite: '2023-07-14', adresse: '456 avenue de Lyon' }
    ];
    return { clients };
  }

  genId(clients: Client[]): number {
    let maxId = 0;

    if (clients.length === 0) {
      return 1;
    }

    for (let i = 0; i < clients.length; i++) {
      if (clients[i].id > maxId) {
        maxId = clients[i].id;
      }
    }

    return maxId + 1;
  }

}
