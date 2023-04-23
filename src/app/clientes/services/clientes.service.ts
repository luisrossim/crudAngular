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


  buscarPorID(id: string) {
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }


  salvar(registro: Partial<Cliente>) {
    // verificar se o registro ja possui um id, se nao ira criar.
    //console.log(registro);
    if( registro.idCliente ) {
      return this.editar(registro);
    }
    return this.cadastrar(registro);
  }


  private cadastrar(registro: Partial<Cliente>) {
    return this.http.post<Cliente>(this.API, registro).pipe(first());
  }

  private editar(registro: Partial<Cliente>) {
    return this.http.put<Cliente>(`${this.API}/${registro.idCliente}`, registro).pipe(first());
  }


  public remover(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(first());
  }
  
}
