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
}
