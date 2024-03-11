import { InvestimentoService } from 'src/app/services/investimento.service';
import { Component, OnInit } from '@angular/core';
import { Investimento } from 'src/app/classes/investimento';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.scss']
})
export class InvestimentosComponent implements OnInit {
  
  constructor(private investimentoService: InvestimentoService) {}
  
  ngOnInit(): void {
    this.getInvestimentosRendaVariavel();
  }

  investimentoVariavelLista: Investimento[] = [];
  
  getInvestimentosRendaVariavel() {
    this.investimentoService.getInvestimentosRendaVariavel().subscribe(
      (data: Investimento[]) => {
      this.investimentoVariavelLista = data;
    });
  }

}
