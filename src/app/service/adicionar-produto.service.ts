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

  get_all_products(page: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.url}/pagination/${page};${limit}`);
  }

  get_all_types(): Observable<any> {
    return this.http.get<any>(`${this.url}/services/types`);
  }

  delete_product(id: number): Observable<{message: string}> {
    return this.http.delete<{message: string}>(`${this.url}/${id}`);
  }

  update_product(id: number, produto: object): Observable<{message: string}> {
    return this.http.put<{message: string}>(`${this.url}/update/${id}`, produto);
  }
}
