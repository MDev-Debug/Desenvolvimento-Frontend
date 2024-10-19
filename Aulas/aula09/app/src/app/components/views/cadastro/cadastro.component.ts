import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  public email!: string;
  public senha!: string;

  public login(): void {
    if (this.email == null || this.senha == null) {
      alert('Preencha todos os campos')
    }
    else {
      alert('Login efetuado com sucesso')
    }
  }
}
