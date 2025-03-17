import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdicionarProdutoService } from '../../service/adicionar-produto.service';

@Component({
  selector: 'app-search-inventory',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-inventory.component.html',
  styleUrl: './search-inventory.component.scss'
})
export class SearchInventoryComponent implements OnInit{

  adicionarProdutos: boolean = false;
  formularioProdutos!: FormGroup;
  apiResponse: any;

  constructor(
    private formulario: FormBuilder, 
    private adicionarProdutoService: AdicionarProdutoService
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

  AdicionarProdutos(){
    this.adicionarProdutos = !this.adicionarProdutos
  }
  AdicionarProdutoApi(produto: Produto): void {
    this.adicionarProdutoService.add_product(produto).subscribe({
      next: (data) => {
        this.formularioProdutos.reset();
        console.log(data);
      },
      error: (err) => console.log(err)
    })
  }
}
