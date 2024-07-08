import { Component, OnInit } from '@angular/core';
import { BLOG_DIRECTORY, BlogMetadata } from '../../pages/blog/data/directory';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent implements OnInit {
  directory: BlogMetadata[] = [];
  ngOnInit(): void {
    this.directory = BLOG_DIRECTORY;
  }
}
