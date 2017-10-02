import i18nT from './helper';

const { module, test } = QUnit;

module('Helper: i18n-t', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(i18nT([]), undefined);
  });
});
