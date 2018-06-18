import { Cliente } from '../entidades/cliente.model'
import * as firebase from 'firebase'

import {Injectable } from '@angular/core'
import { Router } from '@angular/router'



@Injectable()
export class ClienteService{

    constructor(private router: Router){}

    public cadastrarCliente(cliente: Cliente){
        firebase.database().ref(`cliente/${btoa(cliente.cpf)}`).set(cliente)
            .then(() => this.router.navigate(['/visualizarCliente']))
            .catch((erro: Error) => console.log(erro))
    }

    
    
}

