import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharingDataService } from '../../service/estado/sharing-data.service';

@Component({
  selector: 'app-search-inventory',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-inventory.component.html',
  styleUrl: './search-inventory.component.scss'
})
export class SearchInventoryComponent implements OnInit{
  constructor(
    private formulario: FormBuilder, 
    private sharingDataService: SharingDataService
  ) {}
  adicionarProdutos_button: boolean = false;
  formularioProdutos!: FormGroup;
  productsType!: any;
  messagePopUp: string = '';
  
  ngOnInit(): void {
    this.formularioProdutos = this.formulario.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      type: ['', Validators.required],
      image: [''],
      description: ['']
    })

    this.sharingDataService.getProductType$.subscribe((data) => this.productsType = data);
    if (!this.sharingDataService.getTypesHasData()){
      this.sharingDataService.GetTypesApi();
    }
    console.log(this.productsType);
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
    try {
      this.sharingDataService.AdicionarProdutoApi(produto, 25); // Definir variavel global limitMax
      this.formularioProdutos.reset();
      this.sharingDataService.messagePopUp$.subscribe({next: ( data )=> this.messagePopUp = data})
      //this.adicionarProdutos_button = false //Arrumar para error
    }
    catch (error) {
      console.log(error);
    }
  }

  GetTypesApi(): void {
    this.sharingDataService.GetTypesApi();
  }
  
}
