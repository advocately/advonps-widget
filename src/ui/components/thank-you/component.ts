import Component, { tracked } from '@glimmer/component';
import i18n from '../i18n-t/helper';

export default class ThankYou extends Component {
  @tracked rating = 10;

  get thankYou() {
    if (this.rating > 8) {
      return i18n(['promoter.thanksMessage']);
    } else if (this.rating > 6) {
      return i18n(['passive.thanksMessage']);
    } else {
      return i18n(['detractor.thanksMessage']);
    }
  }
};
