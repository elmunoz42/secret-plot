import { SecretPlotPage } from './app.po';

describe('secret-plot App', function() {
  let page: SecretPlotPage;

  beforeEach(() => {
    page = new SecretPlotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
