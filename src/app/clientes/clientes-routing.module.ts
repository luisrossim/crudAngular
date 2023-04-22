import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './container/clientes/clientes.component';
import { ClientesFormComponent } from './container/clientes-form/clientes-form.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'novo', component: ClientesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
