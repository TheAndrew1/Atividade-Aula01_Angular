import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from '../carroModel';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.scss']
})
export class CarroDetailComponent {
  modalService = inject(NgbModal);
  @Input() entrada!: Carro;
  carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  ngOnInit(): void {
      if(this.entrada != null){
        this.carro = this.entrada;
      }
  }

  cadastrar(){
    if(this.carro.modelo != null && this.carro.modelo != "" && this.carro.ano != null && this.carro.ano > 0){
      this.retorno.emit(this.carro);
    }else{
      alert("Titulo e/ou autor inválido!");
    }
    
    this.modalService.dismissAll();
  }
}
