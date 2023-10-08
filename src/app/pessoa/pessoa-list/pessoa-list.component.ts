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
  
  pessoas: Pessoa[] = [];
  pessoaSelecionada!: Pessoa;
  indiceSelecionado!: number;

  abrirModal(modal: any, pessoa: any) {
    this.pessoaSelecionada = pessoa;
    this.modalService.open(modal, { size: 'lg' });
  }

  adicionarPessoa(pessoa: Pessoa){
    this.pessoas.push(pessoa);
  }
}
