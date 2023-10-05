import { Component, inject } from '@angular/core';
import { Usuario } from './usuarioModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  roteador = inject(Router);
  usuario: Usuario = new Usuario();

  login(): void{
    console.log(this.usuario.login);
    console.log(this.usuario.senha);

    if(this.usuario.login == "admin" && this.usuario.senha == "admin"){
      this.roteador.navigate(["/admin/pessoas"]);
    } else{
      alert("Usuario ou senha incorreto!")
    }
  }
}
