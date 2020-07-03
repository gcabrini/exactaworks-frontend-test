import { browser, by, element } from 'protractor';
import { ElementFinder } from 'protractor/built/element';

export class BasePage {

  private pageUrl: string;
  private fields;

  constructor(pageUrl: string, pageFieldsObj?) {
    this.pageUrl = pageUrl;

    if (pageFieldsObj) {
      this.initFields(pageFieldsObj);
    }
  }

  private initFields(pageFieldsObj) {
    this.fields = [];

    Object.keys(pageFieldsObj).forEach(key => {
      const field = pageFieldsObj[key];
      this.fields[field] = element(by.name(pageFieldsObj[key]));
    });
  }

  navigateTo() {
    return browser.get(this.pageUrl);
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  getField(field): ElementFinder {
    return this.fields[field];
  }

  setFieldValue(field, value) {
    this.fields[field].sendKeys(value);
  }

  getFieldValue(field) {
    return this.fields[field].getAttribute('value');
  }

  populateDropdown(field, value) {
    this.fields[field].$(`[value=${value}]`).click();
  }

  getByCss(cssSelector) {
    return element(by.css(cssSelector));
  }
}
