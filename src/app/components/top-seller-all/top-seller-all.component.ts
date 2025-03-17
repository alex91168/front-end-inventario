import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  vendas: number;
  img: string;
}

@Component({
  selector: 'app-top-seller-all',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './top-seller-all.component.html',
  styleUrls: ['./top-seller-all.component.scss'],
})


export class TopSellerAllComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 1300,
      img: '/produto.webp',
    },
    {
      id: 2,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 900,
      img: '/produto.webp',
    },
    {
      id: 3,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 200,
      img: '/produto.webp',
    },
    {
      id: 4,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 100,
      img: '/produto.webp',
    },
    {
      id: 5,
      name: 'Caixa Treinador Avançado Pokémon Go - COPAG - Deck de Cartas',
      vendas: 50,
      img: '/produto.webp',
    },
  ];

}
