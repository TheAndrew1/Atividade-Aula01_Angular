import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from '../carroModel';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent {
  modalService = inject(NgbModal);
  
  carros: Array<Carro> = new Array<Carro>();
  tipoModal: string = "";
  carroSelecionado!: Carro;
  indiceSelecionado: number = -1;

  abrirModal(modal: any, tipo: string, livro: any) {
    this.tipoModal = tipo;
    this.carroSelecionado = livro;
    this.indiceSelecionado = this.carros.indexOf(this.carroSelecionado);
    this.modalService.open(modal, { size: 'lg' });
  }

  adicionarLivro(carro: Carro){
    if(this.indiceSelecionado != -1){
      this.carros.splice(this.indiceSelecionado, 1, carro);

      this.carroSelecionado = new Carro();
      this.indiceSelecionado = -1;
    }else{
      this.carros.push(carro);
    }
  }
}
