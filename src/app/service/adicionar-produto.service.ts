import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdicionarProdutoService {
  private url = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }

  add_product(produto: Produto): Observable<{ message: string }> {
    return this.http.post<{message: string}>(this.url, produto);
  }

  get_all_products(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  get_all_types(): Observable<any> {
    return this.http.get<any>(`${this.url}/services/types`);
  }

}
