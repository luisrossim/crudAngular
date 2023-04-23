import { Component } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClientesService } from '../../services/clientes.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {

  clientes$: Observable<Cliente[]> | null = null;


  constructor(
      private clientesService: ClientesService,
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute,
      private snackBar: MatSnackBar
    ) {
    this.refresh();
  }


  onError(errorMensagem: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMensagem
    });
  }


  refresh(){
    this.clientes$ = this.clientesService.lista().pipe(
      catchError(error => {
        this.onError('Falhou ao carregar clientes')
        return of ([])
      })
    )
  }


  onAdicionar() {
    //this.router.navigate(['clientes/novo']);
    this.router.navigate(['novo'], {relativeTo: this.route});
  }


  onEditar(cliente: Cliente) {
    this.router.navigate(['editar', cliente.idCliente], {relativeTo: this.route});
  }


  onRemover(cliente: Cliente){
    this.clientesService.remover(cliente.idCliente).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Cliente removido com sucesso!', 'X', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      error => this.onError('Erro ao remover cliente')
    );
  }



}
