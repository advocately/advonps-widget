import colorMixer from 'color';
const ColorMixer = colorMixer;
import npsConfig from '../nps-config/helper';

function mixColors(type: string) {
  if (npsConfig(type)) {
    return npsConfig(type);
  }

  if (type === 'foregroundLight') {
    return ColorMixer(npsConfig('textColor'))
      .mix(ColorMixer(npsConfig('backgroundColor')), 0.6)
      .hex();
  }
  if (type === 'shadow') {
    return ColorMixer(npsConfig('textColor'))
      .mix(ColorMixer(npsConfig('backgroundColor')), 0.1)
      .hex();
  }
  if (type === 'border') {
    return ColorMixer(npsConfig('textColor'))
      .mix(ColorMixer(npsConfig('backgroundColor')), 0.15)
      .hex();
  }
  if (type === 'borderButton') {
    return ColorMixer(npsConfig('primaryColor'))
      .mix(ColorMixer(npsConfig('backgroundColor')), 0.6)
      .hex();
  }
};

export default function colorConfig(params) {
  let type: string = params[0];
  let mixedColor = mixColors(type);

  if (mixedColor && npsConfig(mixedColor)) {
    return npsConfig(mixedColor);
  }

  return mixedColor;
};
