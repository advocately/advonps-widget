import Component, { tracked } from '@glimmer/component';

export default class NpsBar extends Component {
  @tracked rating: number = undefined;
  @tracked feedback: string = undefined;
  states = ['rating', 'feedback', 'completed'];

  @tracked('currentState')
  get initialRating() {
    return 'rating' === this.currentState;
  }

  @tracked('currentState')
  get leavingFeedback() {
    return 'feedback' === this.currentState;
  }

  @tracked('currentState')
  get completedForm() {
    return 'completed' === this.currentState;
  }

  @tracked('rating', 'feedback')
  get currentState() {
    if (this.rating && this.feedback) {
      return 'completed';
    } else if (this.rating) {
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
  }
};

