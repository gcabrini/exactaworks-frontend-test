import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPageComponent } from './order-page';
import { HowItWorksPageComponent } from './how-it-works-page';
import { HelpPageComponent } from './help-page';
import { PrivacyPageComponent } from './privacy-page';
import { NotFoundPageComponent } from './not-found-page';

import { OrderModule } from './../shared';
import { DirectivesModule } from './../directives';

@NgModule({
  imports: [
    CommonModule,
    OrderModule,
    DirectivesModule
  ],
  declarations: [
    OrderPageComponent,
    HowItWorksPageComponent,
    HelpPageComponent,
    PrivacyPageComponent,
    NotFoundPageComponent
  ],
  exports: [
    OrderPageComponent,
    HowItWorksPageComponent,
    HelpPageComponent,
    PrivacyPageComponent,
    NotFoundPageComponent
  ]
})
export class PagesModule { }
