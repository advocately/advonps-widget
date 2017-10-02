import Component from '@glimmer/component';

export default class AdvonpsWidget extends Component {
  hideSurvey() {
    this.element.className = "advonps-survey nps-slide--leave";
  },

  didInsertElement() {
    if (window.advocately) {
      setTimeout(() => {
        this.element.className = "advonps-survey";
      }, 3000);
    } else {
      this.element.className = "advonps-survey";
    }
  }
};

