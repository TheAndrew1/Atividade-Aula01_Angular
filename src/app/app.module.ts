import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { ListaComponent } from './pessoa/lista/lista.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './sistema/login/login.component';
import { DetalhesComponent } from './pessoa/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListaComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
