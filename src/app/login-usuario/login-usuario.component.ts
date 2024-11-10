import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  public formularioLogin: FormGroup = this.criarFormulario();
  public vc_email: string = '';
  public vc_senha: string = '';
  public mensagemErro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
  }

  criarFormulario(): FormGroup {
    return this.formBuilder.group({
      vc_email: [null, [Validators.required, Validators.email]],
      vc_senha: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  exibirErro(campo: string, erro: string): boolean {
    return this.formularioLogin.controls[campo].hasError(erro) &&
      (this.formularioLogin.controls[campo].dirty || this.formularioLogin.controls[campo].touched);
  }

  enviarFormulario() {
    if (this.formularioLogin.valid) {
      this.vc_email = this.formularioLogin.get('vc_email')?.value;
      this.vc_senha = this.formularioLogin.get('vc_senha')?.value;

      this.usuariosService.loginUsuario(this.vc_email, this.vc_senha).subscribe((resp: any) => {
        this.mensagemErro = '';
        
        localStorage.setItem('usuario_id', resp.id);
        localStorage.setItem('usuario_nome', resp.vc_nome);

        window.location.href = '/jogos/listar';
      }, (error) => {
        this.mensagemErro = error.error;
      });
    }
  }

}
