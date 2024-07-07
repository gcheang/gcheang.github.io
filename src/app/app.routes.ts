import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogEntryComponent } from './pages/blog/blog-entry/blog-entry.component';
import { Blog404Component } from './pages/blog/blog-404/blog-404.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'gcheang',
  },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  //   title: 'gcheang - About',
  // },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'gcheang - Projects',
  },
  {
    path: 'blog/error/404',
    component: Blog404Component,
    title: 'gcheang - Blog',
  },
  {
    path: 'blog/:id',
    component: BlogEntryComponent,
    title: 'gcheang - Blog',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'gcheang - Blog',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
