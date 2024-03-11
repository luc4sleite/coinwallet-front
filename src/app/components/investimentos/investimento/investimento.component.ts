import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Investimento } from 'src/app/classes/investimento';
import { InvestimentoService } from 'src/app/services/investimento.service';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.scss']
})
export class InvestimentoComponent implements OnInit {

  id!: string;

  constructor(private investimentoService: InvestimentoService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getInvestimentoVariavelById();
  }

  investimento: Investimento = new Investimento(0, '', 0, 0, '', '', 0, 0, '', 0, '');

  getInvestimentoVariavelById() {
    this.investimentoService.getInvestimentoById(Number(this.id)).subscribe(
      (data: Investimento) => {
        this.investimento = data;
      });
  }
  

}
