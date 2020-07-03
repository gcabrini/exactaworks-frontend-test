import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputHoverDirective } from './input-hover/input-hover.directive';
import { OnlyNumberDirective } from './only-number/only-number.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputHoverDirective,
    OnlyNumberDirective
  ],
  exports: [
    InputHoverDirective,
    OnlyNumberDirective
  ]
})
export class DirectivesModule { }
