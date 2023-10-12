import { Component, OnInit, inject } from '@angular/core';
import { Pessoa } from '../pessoaModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent{
  modalService = inject(NgbModal);
  pessoaService = inject(PessoaService);
  
  pessoas: Array<Pessoa> = new Array<Pessoa>();
  tipoModal: string = "";
  pessoaSelecionada!: Pessoa;

  constructor() {
    this.listAll();
  }

  listAll(){
    this.pessoaService.listAll().subscribe({
      next: resposta => {
        this.pessoas = resposta
      }, 
      error: erro => 
        console.log(erro)
      });
  }

  abrirModal(modal: any, tipo: string, pessoa: any) {
    this.tipoModal = tipo;
    this.pessoaSelecionada = pessoa;
    this.modalService.open(modal, { size: 'lg' });
  }

  atualizarLista(){
    this.pessoaService.listAll().subscribe({
      next: resposta => {
        this.pessoas = resposta
      }, 
      error: erro => 
        console.log(erro)
      });
  }
}
