import { Component, OnInit } from '@angular/core';
import { Cliente } from '../entidades/cliente.model'
import * as firebase from 'firebase'

@Component({
  selector: 'app-visualizar-clientes',
  templateUrl: './visualizar-clientes.component.html',
  styleUrls: ['./visualizar-clientes.component.css']
})
export class VisualizarClientesComponent implements OnInit {
  public clientes: Cliente[] = new Array()
  constructor() { }

  ngOnInit() {
    this.buscarTodos()
    

  }
  public buscarTodos(){
    var cliente: Cliente
    this.clientes = new Array()
    //Pegando todos clientes do banco de dados
    firebase.database().ref(`cliente`).once('value', (snapshot: any) => {
      snapshot.forEach((childSnapshot: any) => {
        cliente = childSnapshot.val();
        var length = this.clientes.push(cliente);
      });
      console.log(this.clientes)
    });
  }

  public excluirCliente(cliente:Cliente){
    firebase.database().ref(`cliente/${btoa(cliente.cpf)}/`).remove()
    this.buscarTodos()

  }

}
