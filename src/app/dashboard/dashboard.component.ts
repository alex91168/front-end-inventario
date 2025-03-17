import { Component } from '@angular/core';
import { TabelaProdutosComponent } from '../components/tabela-produtos/tabela-produtos.component';
import { GraphContentComponent } from '../components/graph-content/graph-content.component';
import { InfoInventoryComponent } from '../components/info-inventory/info-inventory.component';
import { TopSellerAllComponent } from '../components/top-seller-all/top-seller-all.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GraphContentComponent, TopSellerAllComponent, InfoInventoryComponent, TabelaProdutosComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
