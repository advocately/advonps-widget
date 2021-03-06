import colorConfig from './helper';

const { module, test } = QUnit;

module('Helper: color-config', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(colorConfig(['hi']), undefined);
  });

  test('it finds existing colors', function(assert) {
    assert.equal(colorConfig(['primaryColor']), '#38a564');
  });

  test('it makes custom colors', function(assert) {
    assert.equal(colorConfig(['borderButton']), '#aedac0');
  });
});
