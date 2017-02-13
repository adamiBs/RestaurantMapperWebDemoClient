import { RestaurantMapperWebDemoClientPage } from './app.po';

describe('restaurant-mapper-web-demo-client App', function() {
  let page: RestaurantMapperWebDemoClientPage;

  beforeEach(() => {
    page = new RestaurantMapperWebDemoClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
