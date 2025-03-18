import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdicionarProdutoService } from '../adicionar-produto.service';
import { Produto } from '../../models/produto';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  private productListSubject = new BehaviorSubject<any[]>([]);
  private productTypeSubject = new BehaviorSubject<any[]>([]);
  constructor (private adicionarProdutoService: AdicionarProdutoService){}
  getProductList$ = this.productListSubject.asObservable();
  getProductType$ = this.productTypeSubject.asObservable();

  GetProductsApi(): void {
    this.adicionarProdutoService.get_all_products().subscribe({
      next: (data) => this.productListSubject.next(data),
      error: (err) => this.productListSubject.next(err)
    })
  }
  getProductsHasData(): boolean { return this.productListSubject.getValue().length > 0 }

  GetTypesApi(): void {
    this.adicionarProdutoService.get_all_types().subscribe({
      next: (data) => this.productTypeSubject.next(data),
      error: (err) => console.error(err)  
    })
  }
  getTypesHasData(): boolean { return this.productTypeSubject.getValue().length > 0 }

  AdicionarProdutoApi(produto: Produto): void {
    this.adicionarProdutoService.add_product(produto).subscribe({
      next: () => this.GetProductsApi(),
    })
  }

  deleteProduct(id: number): void {
    this.adicionarProdutoService.delete_product(id).subscribe({
      next: () => this.GetProductsApi(),
    })
  }

}
