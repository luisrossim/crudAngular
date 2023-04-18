import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { first, take, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private readonly API = 'api/clientes';

  
  constructor(private http: HttpClient) { }


  lista() {
    return this.http.get<Cliente[]>(this.API).pipe(
      first(), 
      tap(clientes => console.log(clientes))
    );
  }

  cadastrar(registro: Partial<Cliente>) {
    return this.http.post<Cliente>(this.API, registro);
  }

}
