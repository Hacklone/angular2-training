import { RoboShopPage } from './app.po';

describe('robo-shop App', function() {
  let page: RoboShopPage;

  beforeEach(() => {
    page = new RoboShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
