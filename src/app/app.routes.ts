import { Routes } from '@angular/router';
import { BareboneLayoutComponent } from '@layouts/barebone-layout/barebone-layout.component';
import { ContentLayoutComponent } from '@layouts/content-layout/content-layout.component';
import { AboutComponent } from '@pages/about/about.component';
import { HomeComponent } from '@pages/home/home.component';
import { ErrorComponent } from '@pages/error/error.component';

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
        path: 'about',
        component: AboutComponent,
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
