import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Usuario } from '../entidades/usuario.model'

import {Autenticacao } from '../services/autenticacao.service'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private autenticacao: Autenticacao
  ) { }

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)

  })

  ngOnInit() {
  }

  public cadastrarUsuario():void{
    console.log(this.formulario)
    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )
    console.log(usuario)

    this.autenticacao.cadastrarUsuario(usuario)

  }

}
