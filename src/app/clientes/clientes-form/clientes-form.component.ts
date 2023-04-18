import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ClientesService } from '../services/clientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})

export class ClientesFormComponent {
  formulario = this.formBuilder.group({
    name: [''],
    idade: [1],
    cidade: [''],
    categoria: ['']
  });

  //NonNullableFormBuilder valida os campos para not null
  constructor(private formBuilder: NonNullableFormBuilder, 
    private service: ClientesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) {

  }

  onSubmit(){
    //console.log(this.formulario.value);
    this.service.cadastrar(this.formulario.value).subscribe(resultado => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    //this.router.navigate([''], {relativeTo: this.route});
    this.location.back();
  }

  private onSuccess(){
    this._snackBar.open('Cliente cadastrado com sucesso!', '', {duration: 3000});
    this.onCancel();
  }

  onError(){
    this._snackBar.open('Erro ao cadastrar cliente', '', {duration: 3000});
  }
}
