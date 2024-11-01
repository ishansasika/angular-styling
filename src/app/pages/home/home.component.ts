import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HorizontalScrollerDirective } from '@shared/directives/horizontal-scroller/horizontal-scroller.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HorizontalScrollerDirective, ButtonComponent],
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

  array = Array.from({ length: 30 }, (_, i) => i + 1);

  activeIndex!: number;
  activeIndex2!: number;
}
