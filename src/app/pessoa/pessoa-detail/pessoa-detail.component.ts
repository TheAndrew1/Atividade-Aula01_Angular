import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from '../pessoaModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.scss']
})
export class PessoaDetailComponent{
  modalService = inject(NgbModal);
  @Input() pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();

  cadastrar(){
    if(this.pessoa.nome != null && this.pessoa.nome != "" && this.pessoa.idade != null && this.pessoa.idade > 0){
      this.retorno.emit(this.pessoa);
    }else{
      alert("Nome e/ou idade inválida!");
    }
    
    this.modalService.dismissAll();
  }
}