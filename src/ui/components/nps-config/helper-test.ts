import npsConfig from './helper';

const { module, test } = QUnit;

module('Helper: nps-config', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(npsConfig([]), undefined);
  });
});
