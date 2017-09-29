import Component from '@glimmer/component';

export default class AdvonpsWidget extends Component {
  hideSurvey() {
    this.element.className = "advonps-survey nps-slide--leave";
  }
};
