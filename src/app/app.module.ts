import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {Autenticacao } from './services/autenticacao.service';
import {ClienteService } from './services/cliente.service'
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { VisualizarCarrosComponent } from './visualizar-carros/visualizar-carros.component';
import { CadastrarCarroComponent } from './cadastrar-carro/cadastrar-carro.component';
import { VisualizarClientesComponent } from './visualizar-clientes/visualizar-clientes.component';
import { BuscarCarroComponent } from './buscar-carro/buscar-carro.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    CadastrarClienteComponent,
    VisualizarCarrosComponent,
    CadastrarCarroComponent,
    VisualizarClientesComponent,
    BuscarCarroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Autenticacao, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
