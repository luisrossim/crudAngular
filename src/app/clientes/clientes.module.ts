import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})

export class ClientesModule { }
