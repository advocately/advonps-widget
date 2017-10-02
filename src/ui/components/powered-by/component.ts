import Component from '@glimmer/component';
import npsConfig from '../nps-config/helper';

export default class PoweredBy extends Component {
  get hidePoweredBy() {
    return npsConfig('hidePoweredBy');
  }
};
