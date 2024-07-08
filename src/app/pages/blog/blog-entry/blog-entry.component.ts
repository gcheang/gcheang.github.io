import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { BLOG_DIRECTORY, BlogMetadata } from '../data/directory';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-blog-entry',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, ButtonModule, RouterModule],
  providers: [provideMarkdown()],
  templateUrl: './blog-entry.component.html',
  styleUrl: './blog-entry.component.css',
})
export class BlogEntryComponent {
  id!: string;
  metadata!: BlogMetadata;

  formatOptions: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    const directory = BLOG_DIRECTORY;
    try {
      this.id = this.activatedRoute.snapshot.params['id'];

      let foundEntry = false;

      directory.forEach((entry) => {
        if (entry.url === this.id) {
          foundEntry = true;
          this.metadata = entry;
        }
      });

      if (!foundEntry) throw Error;
    } catch {
      this.router.navigate(['blog/error/404']);
    }
  }
}
