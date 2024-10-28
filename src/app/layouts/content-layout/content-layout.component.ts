import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.css',
})
export class ContentLayoutComponent {}
