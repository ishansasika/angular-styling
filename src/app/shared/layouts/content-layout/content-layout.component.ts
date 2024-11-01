import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/shell/footer/footer.component';
import { HeaderComponent } from '@shared/shell/header/header.component';

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.css',
})
export class ContentLayoutComponent {}
