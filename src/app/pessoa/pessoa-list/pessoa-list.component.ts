import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoaModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent {
  modalService = inject(NgbModal);
  
  pessoas: Array<Pessoa> = new Array<Pessoa>();
  tipoModal: string = "";
  pessoaSelecionada!: Pessoa;
  indiceSelecionado: number = -1;

  abrirModal(modal: any, tipo: string, pessoa: any) {
    this.tipoModal = tipo;
    this.pessoaSelecionada = pessoa;
    this.indiceSelecionado = this.pessoas.indexOf(this.pessoaSelecionada);
    this.modalService.open(modal, { size: 'lg' });
  }

  adicionarPessoa(pessoa: Pessoa){
    if(this.indiceSelecionado != -1){
      this.pessoas.splice(this.indiceSelecionado, 1, pessoa);

      this.pessoaSelecionada = new Pessoa();
      this.indiceSelecionado = -1;
    }else{
      this.pessoas.push(pessoa);
    }
  }
}
