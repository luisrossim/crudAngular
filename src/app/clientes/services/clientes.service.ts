import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private readonly API = '/assets/clientes.json';

  
  constructor(private http: HttpClient) { }


  lista() {
    return this.http.get<Cliente[]>(this.API).pipe(
      first(), 
      delay(1000),
      tap(clientes => console.log(clientes))
    );
  }

}
