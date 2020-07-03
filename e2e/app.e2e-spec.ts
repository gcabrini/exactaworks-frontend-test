import { AppPage } from './pages';

describe('exactaworks-frontend-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should redirect to /order', () => {
    page.navigateTo();
    expect(page.getCurrentUrl()).toContain('/order');
  });
});
