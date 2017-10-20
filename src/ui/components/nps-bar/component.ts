import Component, { tracked } from '@glimmer/component';

export default class NpsBar extends Component {
  @tracked rating: number = undefined;
  @tracked feedback: string = undefined;
  @tracked forceComplete: boolean = false;

  @tracked('currentState')
  get initialRating() {
    return 'rating' === this.currentState;
  }

  @tracked('currentState')
  get leavingFeedback() {
    return 'feedback' === this.currentState;
  }

  @tracked('currentState', 'forceComplete')
  get completedForm() {
    return 'completed' === this.currentState;
  }

  @tracked('rating', 'feedback', 'forceComplete')
  get currentState() {
    let rated = this.rating || this.rating === 0;

    if (rated && this.feedback || this.forceComplete) {
      return 'completed';
    } else if (rated) {
      return 'feedback';
    } else {
      return 'rating';
    }
  }

  submitRating(rating) {
    this.rating = rating;
    if (window.advocately) {
      window.advocately.submitSurvey({ rating: rating })
    } else {
      console.log(this.rating);
    }
  }

  submitFeedback(feedback) {
    this.feedback = feedback;
    if (feedback && feedback.trim().length > 0) {

      if (window.advocately) {
        window.advocately.submitSurvey({ body: feedback })
      } else {
        console.log(this.feedback);
      }
    }
    this.forceComplete = true;
    setTimeout(() => {
      this.args.close();
    }, 2000);
  }
};

