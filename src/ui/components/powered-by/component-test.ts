import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: powered-by', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<powered-by />`);
    let element = this.containerElement.querySelector('div.advo-powered-by');
    assert.ok(element);
    assert.equal(element.textContent.trim().replace( /[\s\n\r]+/g, ' ' ), "Powered by Advocately");
    element = this.containerElement.querySelector('div.advo-powered-by a');

    assert.equal(element.href, "https://www.advocate.ly/")
  });
});
