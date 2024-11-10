import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';
import { ListagemJogosComponent } from './jogos/listagem-jogos/listagem-jogos.component';
import { LoginUsuarioComponent } from './usuarios/login-usuario/login-usuario.component';
import { CadastroJogosComponent } from './jogos/cadastro-jogos/cadastro-jogos.component';
import { EditarJogosComponent } from './jogos/editar-jogos/editar-jogos.component';

const routes: Routes = [
  { path: 'index', component: LoginUsuarioComponent },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'jogos', 
    children: [
      { path: 'listar', component: ListagemJogosComponent },
      { path: 'cadastro', component: CadastroJogosComponent },
      { path: 'editar/:id', component: EditarJogosComponent }
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
