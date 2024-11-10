import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ListagemJogosComponent } from './jogos/listagem-jogos/listagem-jogos.component';
import { LoginUsuarioComponent } from './usuarios/login-usuario/login-usuario.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CadastroJogosComponent } from './jogos/cadastro-jogos/cadastro-jogos.component';
import { EditarJogosComponent } from './jogos/editar-jogos/editar-jogos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    ListagemJogosComponent,
    CadastroJogosComponent,
    EditarJogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
