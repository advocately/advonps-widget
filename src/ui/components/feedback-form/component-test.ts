import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: feedback-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.ok(true);
    await this.render(hbs``);
    // this.submit = () => {
    //   assert.ok(true);
    // }

    // await this.render(hbs`<feedback-form rating=10 submit={{submit}} />`);

    // assert.ok(this.containerElement.querySelector('div.advonps-feedback'));
    // assert.ok(this.containerElement.querySelector('textarea'));

  });
});
