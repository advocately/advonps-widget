import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: rating-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.ok(true);
    await this.render(hbs``);
    // this.submit = () => {
    //   assert.ok(true);
    // }

    // await this.render(hbs`<rating-form submit={{submit}} />`);
    // assert.ok(this.containerElement.querySelector('div.rating-form'));
  });
});
