import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Client} from "../models/client";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const clients = [
      { id: 1, nom: 'Dupont', prenom: 'Jean', dateVisite: '2023-07-13', adresse: '64 bd berthelot clermont-ferrand' },
      { id: 2, nom: 'Durand', prenom: 'Marie', dateVisite: '2023-07-14', adresse: '64 bd berthelot clermont-ferrand' }
    ];
    return { clients };
  }
//généré les id des clients, non mis-en-place pour le moment.
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
