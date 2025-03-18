import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdicionarProdutoService } from '../../service/adicionar-produto.service';
import { SharingDataService } from '../../service/estado/sharing-data.service';

@Component({
  selector: 'app-search-inventory',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-inventory.component.html',
  styleUrl: './search-inventory.component.scss'
})
export class SearchInventoryComponent implements OnInit{
  adicionarProdutos_button: boolean = false;
  formularioProdutos!: FormGroup;
  productsType!: any;

  constructor(
    private formulario: FormBuilder, 
    private adicionarProdutoService: AdicionarProdutoService,
    private sharingDataService: SharingDataService
  ) {}

  ngOnInit(): void {
    this.formularioProdutos = this.formulario.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      type: ['', Validators.required],
      image: [''],
      description: ['']
    })
    this.GetProductsApi();
    this.GetTypesApi();
  }


  formSubmit(): void {
    if (this.formularioProdutos.valid) {
      const produto_form = this.formularioProdutos.value;

      produto_form.price = Number(produto_form.price);
      produto_form.quantity = Number(produto_form.quantity);

      this.AdicionarProdutoApi(produto_form);
      
    } else {
      throw new Error('Formulário inválido');
    }
  }

  AdicionarProdutoApi(produto: Produto): void {
    this.adicionarProdutoService.add_product(produto).subscribe({
      next: (data) => {
        this.formularioProdutos.reset();
        this.GetProductsApi();
        console.log(data);
      },
      error: (err) => console.log(err)
    })
  }

  GetProductsApi(): void {
    this.adicionarProdutoService.get_all_products().subscribe({
      next: (data) => {
        this.sharingDataService.updateApiReponse(data);
      },
      error: (err) => console.log(err)
    })
  }

  GetTypesApi(): void {
    this.adicionarProdutoService.get_all_types().subscribe({
      next: (data) => {
        this.productsType = data;
        console.log('Tipos de cada produto', this.productsType)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
