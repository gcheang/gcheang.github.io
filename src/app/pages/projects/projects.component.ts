import { Component } from '@angular/core';
import { fadeInAndOut } from '../../animations/fadeInAndOut';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [fadeInAndOut],
})
export class ProjectsComponent {}
