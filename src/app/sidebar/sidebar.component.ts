import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  active: string = "/";
  constructor(private router: Router) {}
  
  setActive(link: string) {
    this.active = link;
    this.router.navigate([link]);
    console.log(this.active);
  }
}
