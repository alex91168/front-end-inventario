import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AdicionarProdutoService } from '../adicionar-produto.service';
import { Produto } from '../../models/produto';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  constructor (private adicionarProdutoService: AdicionarProdutoService){}
  private productListSubject = new BehaviorSubject<any[]>([]);
  private productTypeSubject = new BehaviorSubject<any[]>([]);
  private messagePopUpSubject = new BehaviorSubject<string>('');
  private productSearchTitleSubject = new BehaviorSubject<string>('');
  getProductList$ = this.productListSubject.asObservable();
  getProductType$ = this.productTypeSubject.asObservable();
  messagePopUp$= this.messagePopUpSubject.asObservable();
  productBeingSearch$ = this.productSearchTitleSubject.asObservable();
  
  GetProductsApi(page: number, limit: number, type?: string[], search?: string): void {
    if (!type) type = []; if (!search) search = '';
    this.productSearchTitleSubject.next(search);
    this.adicionarProdutoService.get_all_products(page, limit, type, search).subscribe({
      next: (data) => {this.productListSubject.next(data)},
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

  AdicionarProdutoApi(produto: Produto , currentLimit: number): void {
    this.adicionarProdutoService.add_product(produto).subscribe({
      next: (data) => {
        this.GetProductsApi(1, currentLimit);
        this.messagePopUpSubject.next(data.message);
        this.clearMessagePopUp(this.messagePopUpSubject)
      },
    })
  }

  deleteProduct(id: number, currentLimit: number): void {
    this.adicionarProdutoService.delete_product(id).subscribe({
      next: (data) => {
        this.GetProductsApi(1, currentLimit);
        this.messagePopUpSubject.next(data.message);
        this.clearMessagePopUp(this.messagePopUpSubject);
      },
    })
  }

  updateProduct(id: number, produto: object, currentLimit: number): void {
    this.adicionarProdutoService.update_product(id, produto).subscribe({
      next: (data) => {
        this.GetProductsApi(1, currentLimit)
        this.messagePopUpSubject.next(data.message),
        this.clearMessagePopUp(this.messagePopUpSubject);
      }, 
    });
  }

  clearMessagePopUp(subject: any): void {
    setTimeout(() => {
      subject.next('');
    }, 3000);
  }
}
