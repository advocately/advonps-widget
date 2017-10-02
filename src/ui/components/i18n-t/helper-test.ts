import i18nT from './helper';

const { module, test } = QUnit;

module('Helper: i18n-t', function(hooks) {
  test('it returns undefined', function(assert) {
    assert.equal(i18nT([]), undefined);
  });

  test('it returns a default value', function(assert) {
    assert.equal(i18nT(['completed']), undefined);
  });

  test('it returns a nested value', function(assert) {
    assert.equal(i18nT(['promoter.thanksMessage']), "Thank you for your feedback!");
  });

  test('it returns an override value', function(assert) {
    window.advocately = {
      surveyConfig: {
        config: {
          language: {
            completed: 'test'
          }
        }
      }
    }
    assert.equal(i18nT(['completed']), 'test');
  });
});
