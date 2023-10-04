import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { ListaComponent } from './pessoa/lista/lista.component';
import { DetalhesComponent } from './pessoa/detalhes/detalhes.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: IndexComponent, children:[
    {path: "pessoas", component: ListaComponent},
    {path: "pessoas/novo", component: ListaComponent},
    {path: "pessoas/editar/:id", component: DetalhesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
