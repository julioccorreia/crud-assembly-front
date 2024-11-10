import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  readonly BASE_URL = BASE_URL;


  constructor(
    private http: HttpClient
  ) { }

  public loginUsuario(vc_email: string, vc_senha: string): Observable<any> {
    const url = `${this.BASE_URL}usuarios/login`;
    return this.http.post(url, { vc_email, vc_senha });
  }

  public cadastroUsuario(vc_nome: string, vc_email: string, vc_senha: string): Observable<any> {
    const url = `${this.BASE_URL}usuarios/cadastrar`;
    return this.http.post(url, { vc_nome, vc_email, vc_senha });
  }

  public validarUsuario(): boolean
  {
    const id = localStorage.getItem('usuario_id');
    const nome = localStorage.getItem('usuario_nome');

    if((id && nome) && (id !== '' && nome !== '')) {
      return true;
    }

    window.location.href = '/login';
    return false;
  }
}