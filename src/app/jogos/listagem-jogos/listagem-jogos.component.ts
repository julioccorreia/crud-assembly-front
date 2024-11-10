import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { JogosService } from 'src/app/services/jogos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listagem-jogos',
  templateUrl: './listagem-jogos.component.html',
  styleUrls: ['./listagem-jogos.component.css']
})
export class ListagemJogosComponent implements OnInit {
  public usuarioId: string = localStorage.getItem('usuario_id')!;
  public displayedColumns: string[] = ['id', 'vc_nome', 'acoes'];
  public dataSourceJogos: MatTableDataSource<any> = new MatTableDataSource();
  public length: number = 0;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(
    private usuariosService: UsuariosService,
    private jogosService: JogosService
  ) { }

  ngOnInit(): void {
    if(!this.usuariosService.validarUsuario()) {
      window.location.href = '/login';
    }
    this.popularJogos();
  }

  popularJogos(): void {
    this.jogosService.listarJogosPorUsuario(this.usuarioId).subscribe((resp: any) => {
      this.dataSourceJogos.data = resp;
      this.dataSourceJogos.paginator = this.paginator;
      this.length = resp.length;
    })
  }

  sair(): void {
    localStorage.removeItem('usuario_id');
    localStorage.removeItem('usuario_nome');
    
    window.location.href = '/login';
  }
}
