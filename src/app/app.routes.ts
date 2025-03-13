import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventarioComponent } from './inventario/inventario.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'inventario', component: InventarioComponent }
];
