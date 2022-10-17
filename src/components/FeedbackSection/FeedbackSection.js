import React, { Component } from 'react'
import Controls from './Controls/Controls';
import Statistics from './Statistics/Statistics';


class FeedbackControls extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  goodReview = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      }
    })
  }

  neutralReview = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  }

  badReview = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      }
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round(good / total * 100);
  }


  render() {
    return (
      <div>
        <Controls
          goodReview={this.goodReview}
          neutralReview={this.neutralReview}
          badReview={this.badReview}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positiveFeedback={this.countPositiveFeedback}
        />
      </div>
    )
  }
}


export default FeedbackControls;
