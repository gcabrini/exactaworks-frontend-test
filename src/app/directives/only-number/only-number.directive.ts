import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(public el: ElementRef) { }

  @HostListener('keyup')
  applyOnlyNumber() {
    let value = this.el.nativeElement.value;

    this.el.nativeElement.value = value.replace(/\D/g, '');
  }

}
