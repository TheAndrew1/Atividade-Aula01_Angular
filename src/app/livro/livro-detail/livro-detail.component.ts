import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from '../livroModel';

@Component({
  selector: 'app-livro-detail',
  templateUrl: './livro-detail.component.html',
  styleUrls: ['./livro-detail.component.scss']
})
export class LivroDetailComponent {
  modalService = inject(NgbModal);
  @Input() entrada!: Livro;
  livro: Livro = new Livro();
  @Output() retorno = new EventEmitter<Livro>();

  ngOnInit(): void {
      if(this.entrada != null){
        this.livro = this.entrada;
      }
  }

  cadastrar(){
    if(this.livro.titulo != null && this.livro.titulo != "" && this.livro.autor != null && this.livro.autor != ""){
      this.retorno.emit(this.livro);
    }else{
      alert("Titulo e/ou autor inválido!");
    }
    
    this.modalService.dismissAll();
  }
}
