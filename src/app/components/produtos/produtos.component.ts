import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { SharingDataService } from '../../service/estado/sharing-data.service';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})

export class ProdutosComponent implements OnInit {
  constructor( 
    private sharingDataService: SharingDataService,
  ){}

  getProductList: any[] = [];
  isActive: number | null = null;
  selectedProduct: any = null;
  isDetalhesActive: boolean = false;
  deleteResponse!: string;
  
  ngOnInit(): void {
    this.sharingDataService.getProductList$.subscribe((data) => this.getProductList = data);
    if (!this.sharingDataService.getProductsHasData()){
      this.sharingDataService.GetProductsApi();
    }
  }

  mostrarDetalhes(id: number) {
    if (this.isActive === id){
      this.isActive = null; 
      this.selectedProduct = null;
    } else {
      this.isActive = id;
      this.selectedProduct = this.getProductList.find((product: any) => product.id === id);
    }
  }

  editarDetalhes() {
    this.isDetalhesActive = !this.isDetalhesActive;
  }

  deleteProduct(id: number) {
    this.sharingDataService.deleteProduct(id);
  }


}

