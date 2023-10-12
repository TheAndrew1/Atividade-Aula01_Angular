import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from '../carroModel';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent {
  modalService = inject(NgbModal);
  carroService = inject(CarroService);
  
  carros: Array<Carro> = new Array<Carro>();
  tipoModal: string = "";
  carroSelecionado!: Carro;

  constructor() {
    this.listAll();
  }

  listAll(){
    this.carroService.listAll().subscribe({
      next: resposta => {
        this.carros = resposta
      }, 
      error: erro => 
        console.log(erro)
      });
  }

  abrirModal(modal: any, tipo: string, carro: any) {
    this.tipoModal = tipo;
    this.carroSelecionado = carro;
    this.modalService.open(modal, { size: 'lg' });
  }
}
