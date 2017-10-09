import { Angular4MiPage } from './app.po';

describe('angular4-secoo App', () => {
  let page: Angular4MiPage;

  beforeEach(() => {
    page = new Angular4MiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
