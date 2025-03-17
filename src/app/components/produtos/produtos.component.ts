import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})

export class ProdutosComponent {
  products = [
    {
      id: 20,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 2,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 3,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 4,

      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 123,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 221,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 211,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
  ]

  isActive: number | null = null;
  selectedProduct: any = null;
  isDetalhesActive: boolean = false;
  mostrarDetalhes(id: number) {
    if (this.isActive === id){
      this.isActive = null; 
      this.selectedProduct = null;
    } else {
      this.isActive = id;
      this.selectedProduct = this.products.find(product => product.id === id);
    }
  }

  editarDetalhes() {
    this.isDetalhesActive = !this.isDetalhesActive;
  }

}

