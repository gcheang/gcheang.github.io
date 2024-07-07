import { Component } from '@angular/core';
import { fadeInAndOut } from '../../animations/fadeInAndOut';
import { BlogListComponent } from '../../components/blog-list/blog-list.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  animations: [fadeInAndOut],
})
export class BlogComponent {}
