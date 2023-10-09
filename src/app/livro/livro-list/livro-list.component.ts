import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from '../livroModel';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.scss']
})
export class LivroListComponent {
  modalService = inject(NgbModal);
  
  livros: Array<Livro> = new Array<Livro>();
  tipoModal: string = "";
  livroSelecionado!: Livro;
  indiceSelecionado: number = -1;

  abrirModal(modal: any, tipo: string, livro: any) {
    this.tipoModal = tipo;
    this.livroSelecionado = livro;
    this.indiceSelecionado = this.livros.indexOf(this.livroSelecionado);
    this.modalService.open(modal, { size: 'lg' });
  }

  adicionarLivro(livro: Livro){
    if(this.indiceSelecionado != -1){
      this.livros.splice(this.indiceSelecionado, 1, livro);

      this.livroSelecionado = new Livro();
      this.indiceSelecionado = -1;
    }else{
      this.livros.push(livro);
    }
  }
}
