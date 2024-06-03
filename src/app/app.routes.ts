import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'gcheang.github.io',
  },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  //   title: 'gcheang.github.io - About',
  // },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'gcheang.github.io - Projects',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'gcheang.github.io - Blog',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
