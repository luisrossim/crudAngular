import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClientesService } from '../services/clientes.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {

  clientes$: Observable<Cliente[]>;
  displayedColumns = ['idCliente', 'name', 'idade', 'cidade', 'categoria', 'actions'];




  constructor(
      private clientesService: ClientesService,
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute
    ) {
    this.clientes$ = this.clientesService.lista().pipe(
      catchError(error => {
        this.onError('Falhou ao carregar clientes')
        return of ([])
      })
    )
  }

  onError(errorMensagem: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMensagem
    });
  }

  onAdicionar() {
    //this.router.navigate(['clientes/novo']);
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

}
