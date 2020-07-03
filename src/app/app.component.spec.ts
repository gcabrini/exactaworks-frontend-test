import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { PagesModule } from './pages';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  LoaderComponent
} from './shared';

import { routes } from './routes';

describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        LoaderComponent
      ],
      imports: [
        HttpClientTestingModule,
        PagesModule,
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('navigate to "" redirects you to /order', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/order');
  }));
});
