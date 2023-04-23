import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ClientesService } from '../../services/clientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})

export class ClientesFormComponent {
  formulario = this.formBuilder.group({
    idCliente: [''],
    name: [''],
    idade: [1],
    cidade: [''],
    categoria: ['']
  });

  //NonNullableFormBuilder valida os campos para not null
  constructor(private formBuilder: NonNullableFormBuilder, 
    private service: ClientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) {
      const cliente: Cliente = this.route.snapshot.data['cliente'];
      this.formulario.setValue({
        idCliente: cliente.idCliente,
        name: cliente.name,
        idade: cliente.idade,
        cidade: cliente.cidade,
        categoria: cliente.categoria
      });
  }

  onSubmit(){
    this.service.salvar(this.formulario.value).subscribe(resultado => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    //this.router.navigate([''], {relativeTo: this.route});
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Cliente cadastrado com sucesso!', '', {duration: 3000});
    this.onCancel();
  }

  onError(){
    this.snackBar.open('Erro ao cadastrar cliente', '', {duration: 3000});
  }


  

  /* teste
  console.log(this.formulario.value)
  validar(){
    if(this.formulario.value.name == '' || 'null'){
      this.onError();
      return -1;
    } else {
      return 1;
    }
  }
  */
}
