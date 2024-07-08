import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { fadeInAndOut } from '../../../animations/fadeInAndOut';

@Component({
  selector: 'app-blog-404',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './blog-404.component.html',
  styleUrl: './blog-404.component.css',
  animations: [fadeInAndOut],
})
export class Blog404Component {}
