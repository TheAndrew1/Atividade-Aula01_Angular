import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from '../carroModel';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.scss']
})
export class CarroDetailComponent {
  modalService = inject(NgbModal);
  carroService = inject(CarroService);

  @Input() entrada!: Carro;
  carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  ngOnInit(): void {
    if(this.entrada != null){
      this.carroService.findById(this.entrada.id).subscribe({
        next: resposta => {
          this.carro = resposta
        }, 
        error: erro => 
          console.log(erro)
        });
    }
  }

  salvar(){
    if(this.carro.modelo != null && this.carro.modelo != "" && this.carro.ano != null && this.carro.ano > 0){
      if(this.carro.id == null){
        this.carroService.save(this.carro).subscribe({
          next: carro => {
            this.retorno.emit(carro);
          },
          error: erro => {
            console.error(erro);
          }
        });
      }else{
        this.carroService.edit(this.carro.id, this.carro).subscribe({
          next: carro => {
            this.retorno.emit(carro);
          },
          error: erro => {
            console.error(erro);
          }
        });
      }
    }else{
      alert("Modelo e/ou ano inválido!");
    }
    
    this.modalService.dismissAll();
  }
}
