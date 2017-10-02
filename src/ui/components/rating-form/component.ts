import Component, { tracked } from '@glimmer/component';
import i18n from '../i18n-t/helper';

export default class RatingForm extends Component {
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  get lowLegend() {
    return i18n(['unlikely']);
  }

  get highLegend() {
    return i18n(['likely']);
  }

  get howLikely() {
    return i18n(['how_likely_us']);
  }

};
