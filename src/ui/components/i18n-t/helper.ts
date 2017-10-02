import defaults from '../../../utils/messages';

export default function i18nT(key) {
  let overrides = {};
  let language = defaults['en'];

  if (window.advocately && window.advocately.surveyConfig) {
    let config = window.advocately.surveyConfig.config;
    overrides = config.language;
    language = defaults[config.locale];
  }

  return nestedGet(overrides, key) || nestedGet(language, key);
};


function nestedGet(object, string) {
  var a = string.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in object) {
      object = object[k];
    } else {
      return;
    }
  }
  return object;
}
