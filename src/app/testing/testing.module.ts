import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { LoaderService } from '../shared';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientTestingModule,
    FormsModule,
    RouterTestingModule
  ],
  exports: [
    HttpClientTestingModule,
    FormsModule,
    RouterTestingModule
  ],
  declarations: [],
  providers: [
    LoaderService
  ]
})
export class TestingModule { }
