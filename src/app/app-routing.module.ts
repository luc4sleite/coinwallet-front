import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvestimentoListaComponent } from './components/investimentos/investimento-lista/investimento-lista.component';
import { InvestimentoComponent } from './components/investimentos/investimento/investimento.component';
import { InvestimentoFixaComponent } from './components/investimentos/investimento-fixa/investimento-fixa.component';
import { InvestimentosComponent } from './components/investimentos/investimentos/investimentos.component';
import { InvestimentosFixosComponent } from './components/investimentos/investimentos-fixos/investimentos-fixos.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'investimentos', component: InvestimentoListaComponent},
  { path: 'investimento-variavel/:id', component: InvestimentoComponent},
  { path: 'investimento-fixa/:id', component: InvestimentoFixaComponent},
  { path: 'investimentos-variaveis', component: InvestimentosComponent},
  { path: 'investimentos-fixos', component: InvestimentosFixosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
