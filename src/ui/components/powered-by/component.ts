import Component from '@glimmer/component';
import i18n from '../i18n-t/helper';
import npsConfig from '../nps-config/helper';

export default class PoweredBy extends Component {
  get text() {
    return i18n(['powered_by']);
  }

  get hidePoweredBy() {
    return npsConfig('hidePoweredBy');
  }
};
