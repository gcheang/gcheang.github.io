import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-blog-entry',
  standalone: true,
  imports: [],
  templateUrl: './blog-entry.component.html',
  styleUrl: './blog-entry.component.css',
})
export class BlogEntryComponent {
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    try {
      this.id = this.activatedRoute.snapshot.params['id'];
    } catch {
      this.router.navigate(['blog/error/404']);
    }
  }
}
