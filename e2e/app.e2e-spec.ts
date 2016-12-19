import { RobotLibraryPage } from './app.po';

describe('robot-library App', function() {
  let page: RobotLibraryPage;

  beforeEach(() => {
    page = new RobotLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
