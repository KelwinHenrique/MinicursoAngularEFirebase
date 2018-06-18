import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

import {Autenticacao } from '../services/autenticacao.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private autenticacao: Autenticacao
  ) {}

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })


  ngOnInit() {
  }

  public logar():void{
    this.autenticacao.autenticar(this.formulario.value.email, this.formulario.value.senha)
  }

}
