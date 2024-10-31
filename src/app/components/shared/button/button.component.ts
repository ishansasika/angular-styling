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

  /** What corners should the button be rounded? */
  @Input() roundedType?: 'default' | 'top-right-bottom-left' | 'top-left-bottom-right' = 'default';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label: string = 'Button Label';

  /** If the button has a icon aligned in the left side*/
  @Input()
  iconLeft?: 'Arrow Back' | 'Upload' | 'Settings' | 'Star' | 'Add' | 'Search';

  /** If the button has a icon aligned in the right side */
  @Input()
  iconRight?:
    | 'Arrow Forward'
    | 'Delete'
    | 'Close'
    | 'Add'
    | 'Upload'
    | 'Search';

  /** Alternative background color to use */
  @Input()
  backgroundColor?: string;

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  icons = {
    'Arrow Forward': 'arrow_forward',
    'Arrow Back': 'arrow_back',
    Upload: 'upload',
    Delete: 'delete',
    Settings: 'settings',
    Star: 'star',
    Close: 'close',
    Add: 'add',
    Search: 'search',
  };

  public get classes(): string[] {
    const variant = `shared-button--${this.variant}`;
    const size = `shared-button--${this.size}`;
    const rounded = `rounded--${this.rounded}`;

    const roundedType = `rounded--${this.roundedType}`;
    const iconLeft = this.iconLeft ? 'icon-left' : '';
    const iconRight = this.iconRight ? 'icon-right' : '';
    return [
      'shared-button',
      variant,
      size,
      rounded,
      roundedType,
      iconLeft,
      iconRight,
    ];
  }
}
