import Component from '@glimmer/component';
import i18n from '../../../utils/messages';

export default class PoweredBy extends Component {
  get text() {
    return i18n.en.powered_by;
  }

  get hidePoweredBy() {
    return;
  }
};
