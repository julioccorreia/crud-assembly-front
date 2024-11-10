import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  public formularioCadastro: FormGroup = this.criarFormulario();
  public vc_nome: string = '';
  public vc_email: string = '';
  public vc_senha: string = '';
  public vc_confirmar_senha: string = '';
  public mensagemErro: string = '';
  public senhaErro: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
  }

  criarFormulario(): FormGroup {
    return this.formBuilder.group({
      vc_nome: [null, [Validators.required]],
      vc_email: [null, [Validators.required, Validators.email]],
      vc_senha: [null, [Validators.required, Validators.minLength(6)]],
      vc_confirmar_senha: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  exibirErro(campo: string, erro: string): boolean {
    return this.formularioCadastro.controls[campo].hasError(erro) &&
      (this.formularioCadastro.controls[campo].dirty || this.formularioCadastro.controls[campo].touched);
  }

  enviarFormulario(): void {
    if (this.formularioCadastro.valid && this.validarSenhas()) {
      this.vc_nome = this.formularioCadastro.get('vc_nome')?.value;
      this.vc_email = this.formularioCadastro.get('vc_email')?.value;
      this.vc_senha = this.formularioCadastro.get('vc_senha')?.value;

      this.usuariosService.cadastroUsuario(this.vc_nome, this.vc_email, this.vc_senha).subscribe((resp: any) => {
        this.mensagemErro = '';
        
        localStorage.setItem('usuario_id', resp.id);
        localStorage.setItem('usuario_nome', resp.vc_nome);

        window.location.href = '/jogos/listar';
      }, (error) => {
        this.mensagemErro = error.error;
      });
    }
  }

  validarSenhas() {
    const senha = this.formularioCadastro.get('vc_senha')?.value;
    const confirmarSenha = this.formularioCadastro.get('vc_confirmar_senha')?.value;

    if (senha !== confirmarSenha) {
      this.senhaErro = true;
      return false;
    }
    
    this.senhaErro = false;
    return true;
  }
}
