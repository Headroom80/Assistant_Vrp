import {Component, OnInit} from '@angular/core';
import {ClientService} from "../services/client.service";
import {Client} from "../models/client";
import {DatePipe, NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";


@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [
    NgForOf,
    MatSnackBarModule,
    DatePipe

  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit{
  clients:Client[]=[];
  constructor(private clientService:ClientService, private router:Router, public dialog : MatDialog,private snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      console.log("Liste des clients : ", clients);
      this.clients = clients;
    });
  };
  editClient(clientId:number): void {
    // Logique pour éditer un client
    this.router.navigate(['/edit', clientId]);
  }

  confirmDelete(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.deleteClient(id);
      }
    });
  }

  deleteClient(id: number): void {
    const clientToDelete = this.clients.find(client => client.id === id);
    this.clientService.deleteClient(id).subscribe(() => {
      this.clients = this.clients.filter(client => client.id !== id);
      this.snackBar.open(`Client ${clientToDelete?.nom} supprimé`, 'Fermer', {
        duration: 3000,
      });
    });
  }

}
