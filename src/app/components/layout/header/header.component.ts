import { Component, OnInit } from '@angular/core';

import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { fadeInAndOut } from '../../../animations/fadeInAndOut';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonModule, SidebarModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [fadeInAndOut],
})
export class HeaderComponent implements OnInit {
  sidebarVisible: boolean = false;
  darkMode: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => (this.sidebarVisible = false));

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.toggleDarkMode(true);
    } else if (savedTheme === 'light') {
      this.toggleDarkMode(false);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleDarkMode(true);
    }

    console.log(this.darkMode);
  }

  showSidebar = () => {
    this.sidebarVisible = true;
  };

  toggleDarkMode(bool: boolean) {
    this.darkMode = bool;

    if (bool) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
