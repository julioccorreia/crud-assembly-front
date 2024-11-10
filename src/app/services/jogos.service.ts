import { Injectable } from '@angular/core';
import { BASE_URL } from '../app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  readonly BASE_URL = BASE_URL;

  constructor(
    private http: HttpClient
  ) { }

  public listarJogosPorUsuario(idUsuario: string): Observable<any> {
    const url = `${this.BASE_URL}jogos/listar/${idUsuario}`;
    return this.http.get(url);
  }
  
  public cadastrarJogo(fk_usuario: string, vc_nome: string): Observable<any> {
    const url = `${this.BASE_URL}jogos/cadastrar`;
    return this.http.post(url, { fk_usuario, vc_nome });
  }
  
  public editarJogo(id: string, vc_nome: string, fk_usuario: string): Observable<any> {
    const url = `${this.BASE_URL}jogos/editar/${id}`;
    return this.http.put(url, { vc_nome, fk_usuario });
  }

  public buscarJogoPorId(id: string): Observable<any> {
    const url = `${this.BASE_URL}jogos/listar/jogo/${id}`;
    return this.http.get(url);
  }

  public excluirJogo(id: string): Observable<any> {
    const url = `${this.BASE_URL}jogos/excluir/${id}`;
    return this.http.delete(url);
  }
}
