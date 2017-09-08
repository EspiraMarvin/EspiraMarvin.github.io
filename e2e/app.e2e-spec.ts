import { LibprojectPage } from './app.po';

describe('libproject App', () => {
  let page: LibprojectPage;

  beforeEach(() => {
    page = new LibprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
