import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JogosService } from 'src/app/services/jogos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastro-jogos',
  templateUrl: './cadastro-jogos.component.html',
  styleUrls: ['./cadastro-jogos.component.css']
})
export class CadastroJogosComponent implements OnInit {
  public formularioCadastro: FormGroup = this.criarFormulario();
  public id: string = localStorage.getItem('usuario_id')!;
  public vc_nome: string = '';
  public mensagemErro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private jogosService: JogosService
  ) { }

  ngOnInit(): void {
    if(!this.usuariosService.validarUsuario()) {
      window.location.href = '/login';
    }
    this.criarFormulario();
  }

  criarFormulario(): FormGroup {
    return this.formBuilder.group({
      vc_nome: [null, [Validators.required]]
    });
  }

  exibirErro(campo: string, erro: string): boolean {
    return this.formularioCadastro.controls[campo].hasError(erro) &&
      (this.formularioCadastro.controls[campo].dirty || this.formularioCadastro.controls[campo].touched);
  }

  enviarFormulario(): void {
    if (this.formularioCadastro.valid) {
      this.vc_nome = this.formularioCadastro.get('vc_nome')?.value;

      this.jogosService.cadastrarJogo(this.id, this.vc_nome).subscribe((resp: any) => {
        this.mensagemErro = '';

        window.location.href = '/jogos/listar';
      }, (error) => {
        this.mensagemErro = error.error;
      });
    }
  }
}
