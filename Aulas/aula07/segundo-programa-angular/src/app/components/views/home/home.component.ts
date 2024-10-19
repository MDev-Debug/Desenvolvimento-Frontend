import { Component } from '@angular/core';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public produtos: Array<Produto> = new Array<Produto>();
  public produtos2: Produto[] = [];

  constructor() {
    this.produtos.push(new Produto('Bolu de murangu', 1000000000))
    this.produtos.push(new Produto('Bolu de chocolate', 15000))
    this.produtos.push(new Produto('Bolu de milho', 25065))
    this.produtos.push(new Produto('Bolu de baunilha', 2010))

    console.log(this.produtos)
  }
}
