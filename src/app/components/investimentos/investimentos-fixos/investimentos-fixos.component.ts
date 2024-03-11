import { Component, OnInit } from '@angular/core';
import { Investimento } from 'src/app/classes/investimento';
import { InvestimentoService } from 'src/app/services/investimento.service';

@Component({
  selector: 'app-investimentos-fixos',
  templateUrl: './investimentos-fixos.component.html',
  styleUrls: ['./investimentos-fixos.component.scss']
})
export class InvestimentosFixosComponent implements OnInit {
  constructor(private investimentoService: InvestimentoService) {}

  ngOnInit(): void {
    this.getInvestimentosRendaFixa();
  }

  investimentoFixoLista: Investimento[] = [];

  getInvestimentosRendaFixa() {
    this.investimentoService.getInvestimentos().subscribe(
      (data: Investimento[]) => {
      this.investimentoFixoLista = data;
    });
  }

}
