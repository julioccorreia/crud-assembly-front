import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { JogosService } from 'src/app/services/jogos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-editar-jogos',
  templateUrl: './editar-jogos.component.html',
  styleUrls: ['./editar-jogos.component.css']
})
export class EditarJogosComponent implements OnInit {
  public formularioEdicao: FormGroup = this.criarFormulario();
  public id: string = '';
  public fk_usuario: string = localStorage.getItem('usuario_id')!;
  public vc_nome: string = '';
  public mensagemErro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private jogosService: JogosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(!this.usuariosService.validarUsuario()) {
      window.location.href = '/login';
    }
    this.carregarDados();
  }

  public carregarDados(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.formularioEdicao.controls['id'].setValue(this.id);

      this.jogosService.buscarJogoPorId(this.id).subscribe(resp => {
        this.formularioEdicao.patchValue({
          vc_nome: resp.vc_nome,
          fk_usuario: resp.fk_usuario
        });
      });
    });
  }

  public criarFormulario(): FormGroup {
    return this.formBuilder.group({
      id: [{ value: this.id, disabled: true }, Validators.required],
      vc_nome: ['', Validators.required],
      fk_usuario: [this.fk_usuario, Validators.required]
    });
  }

  exibirErro(campo: string, erro: string): boolean {
    return this.formularioEdicao.controls[campo].hasError(erro) &&
      (this.formularioEdicao.controls[campo].dirty || this.formularioEdicao.controls[campo].touched);
  }

  public enviarFormulario(): void {
    if (this.formularioEdicao.valid) {
      const { vc_nome, fk_usuario } = this.formularioEdicao.value;

      this.jogosService.editarJogo(this.id, vc_nome, fk_usuario).subscribe(() => {
        this.mensagemErro = '';
        window.location.href = '/jogos/listar';
      }, (error) => {
        this.mensagemErro = error.error;
      });
    }
  }
}
