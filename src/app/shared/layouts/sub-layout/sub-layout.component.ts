import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from '@shared/shell/sub-header/sub-header.component';

@Component({
  selector: 'app-sub-layout',
  standalone: true,
  imports: [RouterOutlet, SubHeaderComponent],
  templateUrl: './sub-layout.component.html',
  styleUrl: './sub-layout.component.css',
})
export class SubLayoutComponent {}
