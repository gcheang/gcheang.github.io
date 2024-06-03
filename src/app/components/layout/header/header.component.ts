import { Component } from '@angular/core';

import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { fadeInAndOut } from '../../../animations/fadeInAndOut';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonModule, SidebarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [fadeInAndOut],
})
export class HeaderComponent {
  sidebarVisible: boolean = false;
  output = '';

  constructor(private router: Router) {
    router.events.subscribe(() => (this.sidebarVisible = false));
  }

  showSidebar = () => {
    this.sidebarVisible = true;
  };
}
