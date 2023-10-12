import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from '../livroModel';
import { LivroService } from '../livro.service';

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
  livroService = inject(LivroService);

  ngOnInit(): void {
    this.livroService.findById(this.entrada.id).subscribe({
      next: resposta => {
        this.livro = resposta
      }, 
      error: erro => 
        console.log(erro)
      });
  }

  salvar(){
    if(this.livro.titulo != null && this.livro.titulo != "" && this.livro.autor != null && this.livro.autor != ""){
      if(this.livro.id == null){
        this.livroService.save(this.livro).subscribe({
          next: livro => {
            this.retorno.emit(livro);
          },
          error: erro => {
            console.error(erro);
          }
        });
      }else{
        this.livroService.edit(this.livro.id, this.livro).subscribe({
          next: livro => {
            this.retorno.emit(livro);
          },
          error: erro => {
            console.error(erro);
          }
        });
      }
    }else{
      alert("Titulo e/ou autor inválido!");
    }
    
    this.modalService.dismissAll();
  }
}
