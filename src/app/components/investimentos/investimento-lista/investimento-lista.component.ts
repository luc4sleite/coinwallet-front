import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investimento } from 'src/app/classes/investimento';
import { InvestimentoService } from 'src/app/services/investimento.service';

@Component({
  selector: 'app-investimento-lista',
  templateUrl: './investimento-lista.component.html',
  styleUrls: ['./investimento-lista.component.scss']
})
export class InvestimentoListaComponent implements OnInit {

  constructor(private investimentoService: InvestimentoService,
      private router: Router
    ) { }
  
  ngOnInit(): void {
    this.getInvestimentosRendaFixa();
    this.getInvestimentosRendaVariavel();
    this.getInvestimentos();
  }

  investimentoVariavelLista: Investimento[] = [];

  investimentoFixaLista: Investimento[] = [];

  investimentos: Investimento[] = [];

  getInvestimentos() {
    this.investimentoService.getInvestimentos().subscribe(
      (data: Investimento[]) => {
      this.investimentos = data;
    });
  }

  getInvestimentosRendaVariavel() {
    this.investimentoService.getInvestimentosRendaVariavel().subscribe(
      (data: Investimento[]) => {
      this.investimentoVariavelLista = data;
    });
  }

  getInvestimentosRendaFixa() {
    this.investimentoService.getInvestimentosRendaFixa().subscribe((data: Investimento[]) => {
      this.investimentoFixaLista = data;
    });
  }

  redirect(id: number, tipo: string) {
    if (tipo === 'rendaFixa') {
      this.router.navigate(['/investimento-fixa', id]);
    } else if (tipo === 'rendaVariavel'){
      this.router.navigate(['/investimento-variavel', id]);
    }
  }

}
