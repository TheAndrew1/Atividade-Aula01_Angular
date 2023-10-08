import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../pessoaModel';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.scss']
})
export class PessoaDetailComponent {
  @Input() pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();

  cadastrar(){
    this.retorno.emit(this.pessoa);
  }
}