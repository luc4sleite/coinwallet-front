import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investimento } from '../classes/investimento';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {

  constructor(private http: HttpClient) { }

  baseurl: string = 'http://localhost:8080/investimento/';
  
  getInvestimentos(): Observable<Investimento[]> {
    return this.http.get<Investimento[]>(this.baseurl + 'all');
  }

  getInvestimentoById(id: number): Observable<Investimento> {
    return this.http.get<Investimento>(this.baseurl + id);
  }

  getInvestimentosRendaVariavel(): Observable<Investimento[]> {
    return this.http.get<Investimento[]>(this.baseurl + 'rendaVariavel');
  }

  getInvestimentosRendaFixa(): Observable<Investimento[]> {
    return this.http.get<Investimento[]>(this.baseurl + 'rendaFixa');
  }
}
