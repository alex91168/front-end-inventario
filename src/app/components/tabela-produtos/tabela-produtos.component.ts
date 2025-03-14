import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-tabela-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss'],
})
export class TabelaProdutosComponent {
  produtos = [
    { nome: 'Produto A', preco: 50, quantidade: 10 },
    { nome: 'Produto B', preco: 30, quantidade: 5 },
    { nome: 'Produto C', preco: 80, quantidade: 8 },
  ]

  calcularTotal(prec:number, qnt: number) {
    return prec * qnt;
  }
}
