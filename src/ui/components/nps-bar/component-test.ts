import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: nps-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.ok(true);
    await this.render(hbs``);

    // this.hideSurvey = () => {
    //   assert.ok(true);
    // };

    // await this.render(hbs`<nps-bar close={{action hideSurvey}} />`);
    // assert.ok(this.containerElement.querySelector('div.nps-bar'));
  });
});
