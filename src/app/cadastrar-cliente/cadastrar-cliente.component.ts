import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import {ClienteService } from '../services/cliente.service'
import { Cliente } from '../entidades/cliente.model'


@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  public formulario: FormGroup = new FormGroup({
    'nome': new FormControl(null),
    'cpf': new FormControl(null),
    'data_nascimento': new FormControl(null),
    'sexo': new FormControl(null)

  })


  ngOnInit() {
  }

  public cadastrarCliente():void{
    console.log(this.formulario)
    let cliente: Cliente = new Cliente(this.formulario.value.nome, this.formulario.value.cpf,this.formulario.value.data_nascimento,this.formulario.value.sexo)
    this.clienteService.cadastrarCliente(cliente)
  }

}
