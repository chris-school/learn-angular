import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private element: ElementRef) { }

  @Input() appHoverStyle = '';

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHoverStyle == 'title') {
      this.underline(true);
    } else if (this.appHoverStyle == "tags") {
      console.log("FUCK");
      this.bold(true);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.appHoverStyle == 'title') {
      this.underline(false);
    } else if (this.appHoverStyle == "tags") {
      this.bold(false);
    }
  }

  private underline(underline: boolean) {
    if (underline) {
      this.element.nativeElement.style.textDecoration = 'underline';
    } else {
      this.element.nativeElement.style.textDecoration = 'none';
    }
  }

  private bold(bold: boolean) {
    if (bold) {
      this.element.nativeElement.style.fontWeight = "bold";
    } else {
      this.element.nativeElement.style.fontWeight = "normal";
    }
  }
}
