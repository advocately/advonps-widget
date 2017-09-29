import Component, { tracked } from '@glimmer/component';
import i18n from '../../../utils/messages';

export default class ThankYou extends Component {
  @tracked rating = 10;

  @tracked('rating')
  get thankYou() {
    if (this.rating > 8) {
      return i18n.en.promoter.thanksMessage;
    } else if (this.rating > 6) {
      return i18n.en.passive.thanksMessage;
    } else {
      return i18n.en.detractor.thanksMessage;
    }
  }
};
