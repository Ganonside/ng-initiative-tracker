import { NgInitiativeTrackerPage } from './app.po';

describe('ng-initiative-tracker App', () => {
  let page: NgInitiativeTrackerPage;

  beforeEach(() => {
    page = new NgInitiativeTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
