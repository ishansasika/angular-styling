import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-barebone-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './barebone-layout.component.html',
  styleUrl: './barebone-layout.component.css',
})
export class BareboneLayoutComponent {}
