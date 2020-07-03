import {
  OrderPage,
  OrderPageFields
} from './../../pages';

describe('exactaworks-frontend-test App', () => {
  let page: OrderPage;

  beforeEach(() => {
    page = new OrderPage();
  });

  it('check if a focused field be blue', () => {
    page.navigateTo();
    page.getField(OrderPageFields.RG).click();

    expect(page.getByCss('.input--hover').isPresent()).toEqual(true);
  });

  it('check if button has been disabled after click with a invalid form', () => {
    page.navigateTo();
    page.submitButton.click();

    expect(page.submitButton.getAttribute('disabled')).toBeTruthy();
  });

  it('check if success message appears after submit a valid form', () => {
    const successMessage = '.alert-success';

    page.navigateTo();

    page.setFieldValue(OrderPageFields.RG, '999999999');
    page.setFieldValue(OrderPageFields.ISSUE_DATE, '01/01/2018');
    page.populateDropdown(OrderPageFields.ISSUING_AGENCY, 'SSP');

    page.submitButton.click();

    expect(page.getByCss(successMessage).isDisplayed()).toBeTruthy();
  });

});
