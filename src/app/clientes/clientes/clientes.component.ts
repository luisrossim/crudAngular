import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClientesService } from '../services/clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {

  clientes: Observable<Cliente[]>;

  displayedColumns = ['idCliente', 'name', 'idade', 'cidade'];

  //clientesService: ClientesService;



  constructor(private clientesService: ClientesService ) {
    //this.clientesService = new ClientesService();
    this.clientes = this.clientesService.lista();
  }



}
