import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { OrderInfoComponent } from './order-info';
import { OrderStepsComponent } from './order-steps';
import { DirectivesModule } from '../../directives';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [
    OrderInfoComponent,
    OrderStepsComponent
  ],
  exports: [
    OrderInfoComponent,
    OrderStepsComponent
  ]
})
export class OrderModule { }
