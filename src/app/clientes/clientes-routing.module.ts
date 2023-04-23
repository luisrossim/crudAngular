import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './container/clientes/clientes.component';
import { ClientesFormComponent } from './container/clientes-form/clientes-form.component';
import { ClienteResolver } from './guards/cliente.resolver';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'novo', component: ClientesFormComponent, resolve: { cliente: ClienteResolver} },
  { path: 'editar/:id', component: ClientesFormComponent, resolve: { cliente: ClienteResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ClientesRoutingModule { }
