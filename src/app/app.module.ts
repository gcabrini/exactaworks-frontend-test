import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PagesModule } from './pages';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  LoaderComponent,
  LoaderInterceptorService,
  LoaderService
} from './shared';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    PagesModule,
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    HttpClientModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
