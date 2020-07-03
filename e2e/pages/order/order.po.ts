import { browser, by, element, ElementFinder } from 'protractor';

import { BasePage } from './../base.po';

import { OrderPageFields } from './order-page-fields.enum';

export class OrderPage extends BasePage {

  submitButton: ElementFinder = element(by.css('[type="submit"]'));

  constructor() {
    super('/order', OrderPageFields);
  }
}
