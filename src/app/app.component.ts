import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    LoaderService
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  public loaderVisible = true;

  constructor(public loaderService: LoaderService) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderVisible = false;
    }, 1000);
  }
}
