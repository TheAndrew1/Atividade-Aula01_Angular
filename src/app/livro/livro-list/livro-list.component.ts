import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from '../livroModel';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.scss']
})
export class LivroListComponent {
  modalService = inject(NgbModal);
  livroService = inject(LivroService);
  
  livros: Array<Livro> = new Array<Livro>();
  tipoModal: string = "";
  livroSelecionado!: Livro;

  constructor() {
    this.listAll();
  }

  listAll(){
    this.livroService.listAll().subscribe({
      next: resposta => {
        this.livros = resposta
      }, 
      error: erro => 
        console.log(erro)
      });
  }

  abrirModal(modal: any, tipo: string, livro: any) {
    this.tipoModal = tipo;
    this.livroSelecionado = livro;
    this.modalService.open(modal, { size: 'lg' });
  }
}
