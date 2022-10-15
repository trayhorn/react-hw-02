import React, { Component } from 'react'
import Controls from './Controls/Controls';
import Statistics from './Statistics/Statistics';


class FeedbackControls extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
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

  countTotalFeedback()

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
        />
      </div>
    )
  }
}


export default FeedbackControls;
