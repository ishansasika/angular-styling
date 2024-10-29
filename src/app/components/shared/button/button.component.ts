import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  /** Color variant for the button */
  @Input()
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark' = 'primary';

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /** How rounded should the button be? */
  @Input()
  rounded: 'none' | 'small' | 'medium' | 'large' = 'none';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label: string = 'Button Label';

  /** Alternative background color to use */
  @Input()
  backgroundColor?: string;

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const variant = `shared-button--${this.variant}`;
    const size = `shared-button--${this.size}`;
    const rounded = `rounded--${this.rounded}`;
    return ['shared-button', variant, size, rounded];
  }
}
