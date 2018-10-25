import Component, { tracked } from '@glimmer/component';
import i18n from '../i18n-t/helper';

export default class FeedbackForm extends Component {
  @tracked feedback: 'string' = undefined;

  get labelText() {
    let rating = this.args.rating;
    if (rating > 8) {
      return i18n(['follow_up.promoter']);
    } else if (rating > 6) {
      return i18n(['follow_up.passive']);
    } else {
      return i18n(['follow_up.detractor']);
    };
  }

  updateFeedback(e) {
    this.feedback = e.target.value;
  }
};
