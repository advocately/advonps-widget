const defaultColors: any = {
  background: '#fdfdfd',
  foreground: '#333',
  primary:    '#38a564'
};

import colorMixer from 'color';
const ColorMixer = colorMixer;
function mixColors(type: string) {
  if (defaultColors[type]) {
    return defaultColors[type];
  }

  if (type === 'light') {
    return ColorMixer(defaultColors.primary)
      .mix(ColorMixer(defaultColors.background), 0.4)
      .hex();
  }
  if (type === 'background-light') {
    return ColorMixer(defaultColors.primary)
      .mix(ColorMixer(defaultColors.background), 0.04)
      .hex();
  }
  if (type === 'foreground-light') {
    return ColorMixer(defaultColors.foreground)
      .mix(ColorMixer(defaultColors.background), 0.6)
      .hex();
  }
  if (type === 'shadow') {
    return ColorMixer(defaultColors.foreground)
      .mix(ColorMixer(defaultColors.background), 0.1)
      .hex();
  }
  if (type === 'border') {
    return ColorMixer(defaultColors.foreground)
      .mix(ColorMixer(defaultColors.background), 0.15)
      .hex();
  }
  if (type === 'border-button') {
    return ColorMixer(defaultColors.primary)
      .mix(ColorMixer(defaultColors.background), 0.6)
      .hex();
  }
};

export default function colorConfig(params) {
  let type: string = params[0];
  let mixedColor = mixColors(type);

  if (mixedColor && defaultColors[mixedColor]) {
    return defaultColors[mixedColor];
  }

  return mixedColor;
};
