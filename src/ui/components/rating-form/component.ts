import Component, { tracked } from '@glimmer/component';
import i18n from '../../../utils/messages';

export default class RatingForm extends Component {
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  get lowLegend() {
    return i18n.en.unlikely;
  }

  get highLegend() {
    return i18n.en.likely;
  }

  get howLikely() {
    return i18n.en.how_likely_us;
  }

};
