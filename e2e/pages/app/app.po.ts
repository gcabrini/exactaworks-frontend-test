import { browser, by, element } from 'protractor';

import { BasePage } from './../base.po';

export class AppPage extends BasePage {
  constructor() {
    super('/');
  }
}
