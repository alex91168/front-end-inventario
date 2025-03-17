import { Component } from '@angular/core';
import { SearchInventoryComponent } from '../components/search-inventory/search-inventory.component';
import { ProdutosComponent } from '../components/produtos/produtos.component';

@Component({
  selector: 'app-inventario',
  imports: [SearchInventoryComponent, ProdutosComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {

}
