import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';

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
