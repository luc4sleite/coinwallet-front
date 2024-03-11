import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InvestimentoListaComponent } from './components/investimentos/investimento-lista/investimento-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { InvestimentoComponent } from './components/investimentos/investimento/investimento.component';
import { InvestimentoFixaComponent } from './components/investimentos/investimento-fixa/investimento-fixa.component';
import { InvestimentosComponent } from './components/investimentos/investimentos/investimentos.component';
import { InvestimentosFixosComponent } from './components/investimentos/investimentos-fixos/investimentos-fixos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestimentoListaComponent,
    InvestimentoComponent,
    InvestimentoFixaComponent,
    InvestimentosComponent,
    InvestimentosFixosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
