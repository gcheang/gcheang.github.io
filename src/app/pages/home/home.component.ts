import { Component } from '@angular/core';
import { fadeInAndOut } from '../../animations/fadeInAndOut';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [fadeInAndOut],
})
export class HomeComponent {
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
