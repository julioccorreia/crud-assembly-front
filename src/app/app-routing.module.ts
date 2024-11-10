import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListagemJogosComponent } from './jogos/listagem-jogos/listagem-jogos.component';

const routes: Routes = [
  { path: 'index', component: LoginUsuarioComponent },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'jogos', 
    children: [
      { path: 'listar', component: ListagemJogosComponent }
    ]
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', redirectTo: '/index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
