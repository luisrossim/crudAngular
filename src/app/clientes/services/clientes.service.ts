import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private readonly API = '/assets/clientes.json';

  constructor(private httpClient: HttpClient) { }


  lista() {
    return this.httpClient.get<Cliente[]>(this.API).pipe(
      first(),
      tap(clientes => console.log(clientes))
    );
  }

}
