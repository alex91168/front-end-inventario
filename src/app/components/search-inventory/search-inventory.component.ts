import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-inventory',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-inventory.component.html',
  styleUrl: './search-inventory.component.scss'
})
export class SearchInventoryComponent implements OnInit{

  adicionarProdutos: boolean = false;
  formularioProdutos!: FormGroup;
  constructor(private formulario: FormBuilder) {}

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
      const list: Produto = this.formularioProdutos.value;
      console.log(list);
    } else {
      throw new Error('Formulário inválido');
    }
  }

  AdicionarProdutos(){
    this.adicionarProdutos = !this.adicionarProdutos
  }
}
