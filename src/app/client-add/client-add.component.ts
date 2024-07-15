import {Component, OnInit} from '@angular/core';
import {ClientService} from "../services/client.service";
import {Client} from "../models/client";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatDatepicker} from "@angular/material/datepicker";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'app-client-add',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    RouterLink,
    MatLabel,
    MatDatepicker,
    MatSnackBarModule,
  ],
  templateUrl: './client-add.component.html',
  styleUrl: './client-add.component.css'
})
export class ClientAddComponent implements OnInit {
  clientForm: FormGroup;
  clientId?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private snackBar: MatSnackBar
  ) {
    this.clientForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateVisite: ['', Validators.required],
      adresse: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.clientId = idParam !== null ? +idParam : undefined;
    if (this.clientId) {
      this.clientService.getClient(this.clientId).subscribe(client => {
        this.clientForm.patchValue(client);
      });
    }
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const client: Client = {...this.clientForm.value};
      if (this.clientId) {
        client.id = this.clientId;
        this.clientService.updateClient(client).subscribe(() => {
          this.snackBar.open('Changements pris en compte', 'Fermer', {
            duration: 3000,
          });
          this.router.navigate(['/']);
        });
      } else {
        client.id = 0;
        this.clientService.addClient(client).subscribe(() => {
          this.snackBar.open('Client ajouté avec succès', 'Fermer', {
            duration: 3000,
          });
          this.router.navigate(['/']);
        });
      }
    }
  }
}
