import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})


export class ClienteResolver implements Resolve<Cliente> {

  constructor(private service: ClientesService){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> {
    if(route.params && route.params['id']){
      return this.service.buscarPorID(route.params['id']);
    }
    return of({
      idCliente: '',
      name: '',
      idade: 1,
      cidade: '',
      categoria: '' 
    });
  }

}
