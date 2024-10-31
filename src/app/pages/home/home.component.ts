import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  heroImages: string[] = [
    'assets/images/hero-1.webp',
    'assets/images/hero-2.webp',
    'assets/images/hero-3.webp',
  ];

  typography: string[] = ['tiny', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];
}
