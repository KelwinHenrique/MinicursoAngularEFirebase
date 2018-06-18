import { Routes} from '@angular/router'

import { LoginComponent } from './login/login.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component'
import { VisualizarClientesComponent } from './visualizar-clientes/visualizar-clientes.component'
import { MenuComponent } from './menu/menu.component'


export const ROUTES: Routes = [
    {path: '', component:LoginComponent},
    {path: 'cadastrar', component:CadastroComponent},
    {path: 'cadastrarCliente', component:CadastrarClienteComponent},
    {path: 'visualizarCliente', component:VisualizarClientesComponent},
    {path: 'menu', component:MenuComponent}

]