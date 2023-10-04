import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoaDetailComponent } from './pessoa/pessoa-detail/pessoa-detail.component';
import { PessoaListComponent } from './pessoa/pessoa-list/pessoa-list.component';
import { CarroDetailComponent } from './carro/carro-detail/carro-detail.component';
import { CarroListComponent } from './carro/carro-list/carro-list.component';
import { LivroListComponent } from './livro/livro-list/livro-list.component';
import { LivroDetailComponent } from './livro/livro-detail/livro-detail.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: IndexComponent, children:[
    {path: "pessoas", component: PessoaListComponent},
    {path: "pessoas/novo", component: PessoaDetailComponent},
    {path: "pessoas/editar/:id", component: PessoaDetailComponent},
    {path: "carros", component: CarroListComponent},
    {path: "carros/novo", component: CarroDetailComponent},
    {path: "carros/editar/:id", component: CarroDetailComponent},
    {path: "livros", component: LivroListComponent},
    {path: "livros/novo", component: LivroDetailComponent},
    {path: "livros/editar/:id", component: LivroDetailComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
