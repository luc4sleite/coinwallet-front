import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestimentoService } from 'src/app/services/investimento.service';

@Component({
  selector: 'app-investimento-fixa',
  templateUrl: './investimento-fixa.component.html',
  styleUrls: ['./investimento-fixa.component.scss']
})
export class InvestimentoFixaComponent implements OnInit {
  id!: string;

  constructor(private investimentoService: InvestimentoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getInvestimentoFixaById();
  }

  investimento: any = {
    id: 0,
    nome: '',
    valorInvestido: 0,
    valorTotal: 0,
    vencimento: '',
    IR: '',
    valorIR: 0,
    resgate: 0,
    tipo: '',
    percentual: 0
  };

  getInvestimentoFixaById() {
    this.investimentoService.getInvestimentoById(Number(this.id)).subscribe(
      (data: any) => {
        this.investimento = data;
      });
  }

}
