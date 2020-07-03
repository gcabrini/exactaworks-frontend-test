import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appInputHover]'
})
export class InputHoverDirective {

  @Input() appInputHover: string;

  private parentElement: any;

  constructor(public el: ElementRef) {
  }

  @HostListener('focus')
  @HostListener('blur')
  toggleCssClasses() {
    this.getParentElement().classList.toggle('input--hover');

    this.toggleInputErrorClass();
  }

  private getParentElement() {
    let parentElement = this.el.nativeElement.closest(`.${this.appInputHover}`);

    if (!parentElement) {
      throw new Error(`Parent element not found... CSS Selector: '.${this.appInputHover}'`);
    }

    return parentElement;
  }

  private toggleInputErrorClass() {
    if (this.el.nativeElement.classList.contains('ng-invalid')) {
      this.getParentElement().classList.add('input--error');
    } else {
      this.getParentElement().classList.remove('input--error');
    }
  }
}
