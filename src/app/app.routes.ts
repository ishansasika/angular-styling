import { Routes } from '@angular/router';
import { BareboneLayoutComponent } from '@shared/layouts/barebone-layout/barebone-layout.component';
import { ContentLayoutComponent } from '@shared/layouts/content-layout/content-layout.component';
import { AboutComponent } from '@pages/about/about.component';
import { HomeComponent } from '@pages/home/home.component';
import { ErrorComponent } from '@pages/error/error.component';
import { SubLayoutComponent } from '@shared/layouts/sub-layout/sub-layout.component';
import { ProjectsComponent } from '@pages/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: '',
        component: SubLayoutComponent,
        children: [
          {
            path: 'about',
            component: AboutComponent,
          },
          {
            path: 'projects',
            component: ProjectsComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    component: BareboneLayoutComponent,
    children: [
      {
        path: 'error',
        component: ErrorComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
