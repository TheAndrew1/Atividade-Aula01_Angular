import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoaDetailComponent } from './pessoa/pessoa-detail/pessoa-detail.component';
import { PessoaListComponent } from './pessoa/pessoa-list/pessoa-list.component';
import { CarroListComponent } from './carro/carro-list/carro-list.component';
import { CarroDetailComponent } from './carro/carro-detail/carro-detail.component';
import { LivroDetailComponent } from './livro/livro-detail/livro-detail.component';
import { LivroListComponent } from './livro/livro-list/livro-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PessoaDetailComponent,
    PessoaListComponent,
    CarroListComponent,
    CarroDetailComponent,
    LivroDetailComponent,
    LivroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
