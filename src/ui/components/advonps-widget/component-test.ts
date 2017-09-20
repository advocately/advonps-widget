import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: advonps-widget', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<advonps-widget />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
