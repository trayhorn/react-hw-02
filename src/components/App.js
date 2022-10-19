import s from './App.module.css';
import React, { Component } from 'react'
import Section from './Section/Section';
import Controls from './Controls/Controls';
import Statistics from './Statistics/Statistics';

class App extends Component {
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
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.app}>
        <Section title="Please leave Feedback">
          <Controls
            goodReview={this.goodReview}
            neutralReview={this.neutralReview}
            badReview={this.badReview}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positiveFeedback={this.countPositiveFeedback}
          />
        </Section>
      </div>
    )
  }
}


export default App;
