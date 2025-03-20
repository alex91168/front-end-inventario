import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { SharingDataService } from '../../service/estado/sharing-data.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})

export class ProdutosComponent implements OnInit {
  constructor( 
    private sharingDataService: SharingDataService,
    private form: FormBuilder,
  ){}

  getProductList: any[] = [];
  totalPages: any[] = [];
  isActive: number | null = null;
  selectedProduct: any = null;
  isDetalhesActive: boolean = false;
  deleteResponse!: string;
  currentLimit!: any; 
  currentPage: number = 1;
  limitMin!: number;
  limitMax!: number;
  formularioProdutos!: FormGroup | null;
  deletePopUp: boolean = false;
  messagePopUp: string = '';
  
  ngOnInit(): void {
    this.limitMax = 50; this.limitMin = 25;
    this.currentLimit = this.limitMin;
    this.sharingDataService.getProductList$.subscribe((data: any) => {this.getProductList = data.products, this.totalPages = data.totalPages});
    if (!this.sharingDataService.getProductsHasData()){
      this.sharingDataService.GetProductsApi(1, this.limitMin);
    }
  }

  backToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  mostrarDetalhes(id: number) {
    if (this.isActive === id){
      this.isActive = null; 
      this.selectedProduct = null;
    } else {
      this.isActive = id;
      this.selectedProduct = this.getProductList.find((product: any) => product.id === id);
      window.document.body.style.overflow = 'hidden';
    }
  }
  fecharDetalhes(){
    this.selectedProduct = null;
    this.isActive = null;
    this.formularioProdutos?.reset();
    this.isDetalhesActive = false;
    window.document.body.style.overflow = 'auto';
  }

  editarDetalhes(): void {
    this.isDetalhesActive = !this.isDetalhesActive;
    if (this.isDetalhesActive) {
      this.formularioProdutos = this.form.group({
        name: [this.selectedProduct.name],
        price: [this.selectedProduct.price],
        quantity: [this.selectedProduct.quantity],
        type: [this.selectedProduct.type],
        image: [this.selectedProduct.image],
        description: [this.selectedProduct.description]
      });
    } else {
      this.formularioProdutos?.reset()
    }
  }

  submitForm(id: number): void {
    if (!this.formularioProdutos!.valid) {
      throw new Error('Formulário inválido');
    }
    const data = Object.fromEntries(Object.entries(this.formularioProdutos!.value).filter(([c, v]) => v !== this.selectedProduct[c]));
    this.sharingDataService.updateProduct(id, data, this.currentLimit);
    this.sharingDataService.messagePopUp$.subscribe({next: (data)=> this.messagePopUp = data});
    this.isDetalhesActive = false;
    this.isActive = null;
    window.document.body.style.overflow = 'auto';
  }

  getProductsList(page: number): void {
    this.sharingDataService.GetProductsApi(page, this.currentLimit);
    this.currentPage = page;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  deleteProduct(id: number): void {
    this.sharingDataService.deleteProduct(id, this.currentLimit);
    this.sharingDataService.messagePopUp$.subscribe((data) => this.messagePopUp = data); 
    this.deletePopUp = false;
  }
  setLimitView(limit: number): void {
    this.currentLimit = limit;
    this.sharingDataService.GetProductsApi(1, limit);
    this.currentPage = 1;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

