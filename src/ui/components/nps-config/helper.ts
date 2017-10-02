import defaults from '../../../utils/default-config';

export default function npsConfig(key) {
  let overrides = {};

  if (window.advocately && window.advocately.surveyConfig) {
    overrides = window.advocately.surveyConfig.config;
  }

  return overrides[key] || defaults[key];
};
