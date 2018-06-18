import { Usuario } from '../entidades/usuario.model'
import * as firebase from 'firebase'

import {Injectable } from '@angular/core'
import { Router } from '@angular/router'


@Injectable()
export class Autenticacao{

    constructor(private router: Router){}

    public cadastrarUsuario(usuario: Usuario){
        firebase.auth().createUserWithEmailAndPassword(usuario.email,usuario.senha)
            .then((resposta: any) => {

                //remover o atributo senha do objeto usuario
                delete usuario.senha

                //registrando dados complementares do usuario no path email na base64
                //Para desconverter usar atob()
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)
                this.router.navigate([''])
            })
            .catch((error:Error) => {
                console.log(error)
            })
    }

    public autenticar (email: string, senha:string):void{
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => this.router.navigate(['/menu']))
            .catch((erro: Error) => console.log(erro))
        
    }
}