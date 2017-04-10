import { Angular2AdminPanelPage } from './app.po';

describe('angular2-admin-panel App', () => {
  let page: Angular2AdminPanelPage;

  beforeEach(() => {
    page = new Angular2AdminPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
