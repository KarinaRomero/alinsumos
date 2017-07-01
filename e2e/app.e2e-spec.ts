import { AlinsumosPage } from './app.po';

describe('alinsumos App', function() {
  let page: AlinsumosPage;

  beforeEach(() => {
    page = new AlinsumosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
