import { MovieCollectionPage } from './app.po';

describe('movie-collection App', () => {
  let page: MovieCollectionPage;

  beforeEach(() => {
    page = new MovieCollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
