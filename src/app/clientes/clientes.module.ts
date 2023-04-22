import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './container/clientes/clientes.component';
import { SharedModule } from '../shared/shared.module';
import { ClientesFormComponent } from './container/clientes-form/clientes-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesFormComponent,
    ClientesListComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})

export class ClientesModule { }
