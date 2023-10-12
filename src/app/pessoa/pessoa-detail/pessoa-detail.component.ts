import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Pessoa } from '../pessoaModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.scss']
})
export class PessoaDetailComponent implements OnInit{
  modalService = inject(NgbModal);
  pessoaService = inject(PessoaService);
  
  @Input() entrada!: Pessoa;
  pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();

  ngOnInit(): void {
      if(this.entrada != null){
        this.pessoaService.findById(this.entrada.id).subscribe({
          next: resposta => {
            this.pessoa = resposta
          }, 
          error: erro => 
            console.log(erro)
          });
      }
  }

  salvar(){
    if(this.pessoa.nome != null && this.pessoa.nome != "" && this.pessoa.idade != null && this.pessoa.idade > 0){
      if(this.pessoa.id == null){
        this.pessoaService.save(this.pessoa).subscribe({
          next: pessoa => {
            this.retorno.emit(pessoa);
          },
          error: erro => {
            console.error(erro);
          }
        });
      }else{
        this.pessoaService.edit(this.pessoa.id, this.pessoa).subscribe({
          next: pessoa => {
            this.retorno.emit(pessoa);
          },
          error: erro => {
            console.error(erro);
          }
        });
      }
    }else{
      alert("Nome e/ou idade inválida!");
    }
    
    this.modalService.dismissAll();
  }
}