import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroller]',
  standalone: true,
})
export class HorizontalScrollerDirective {
  private el = inject(ElementRef);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const container = this.el.nativeElement as HTMLElement;
    const clickedElement = event.target as HTMLElement;
    if (clickedElement && container) {
      container.scrollTo({
        left:
          -clickedElement.offsetWidth / 2 +
          clickedElement.offsetLeft -
          container.clientWidth / 2,
        behavior: 'smooth',
      });
    }

    console.log(clickedElement.clientWidth);
  }
}
