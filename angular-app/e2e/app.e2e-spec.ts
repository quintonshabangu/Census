import { NgCensusPage } from './app.po';

describe('ng-census App', () => {
  let page: NgCensusPage;

  beforeEach(() => {
    page = new NgCensusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
