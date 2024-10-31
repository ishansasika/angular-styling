import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: { route: string; label: string }[] = [
    { route: 'typography', label: 'Typography' },
    { route: 'buttons', label: 'Buttons' },
    { route: 'inputs', label: 'Inputs' },
    { route: 'no-route', label: 'No Route' },
  ];
}
