import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoaModel';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  pessoas: Pessoa[] = [];

  constructor(){
    this.pessoas = [new Pessoa("Andre", 21),
      new Pessoa("Frederico", 21),
      new Pessoa("Andrei", 19),
      new Pessoa("Cleyton", 25),
      new Pessoa("Véio", 35)]
  }
}
