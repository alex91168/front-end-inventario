import { Component } from '@angular/core';
import { TabelaProdutosComponent } from '../components/tabela-produtos/tabela-produtos.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabelaProdutosComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
