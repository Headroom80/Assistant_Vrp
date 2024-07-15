import {Component, OnInit} from '@angular/core';
import {ClientService} from "../services/client.service";
import {Client} from "../models/client";

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit{
  clients:Client[] = []
  constructor(private clientService:ClientService) {
  }
  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      console.log("Liste des clients : ", clients);
      this.clients = clients;
    });
  };

}
