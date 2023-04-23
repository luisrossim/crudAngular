import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})


export class ClientesListComponent{

  @Input() clientes: Cliente[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['idCliente', 'name', 'idade', 'cidade', 'categoria', 'actions'];
  
  
  constructor(){}


  onAdicionar() {
    //this.router.navigate(['clientes/novo']);
    //this.router.navigate(['novo'], {relativeTo: this.route});
    this.add.emit(true);
  }

  onEditar(cliente: Cliente){
    this.edit.emit(cliente);
  }
}
