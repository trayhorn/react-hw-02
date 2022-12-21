import s from './App.module.css';
import { Component } from 'react';
import Section from './components/Section';
import Controls from './components/Controls';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import ReviewForm from './components/Form/ReviewForm';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }


  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedback = () => {
    const { good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return Math.round(good / total * 100);
  }


  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className={s.app}>
        <Section title="Please leave Feedback">
          <Controls
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positiveFeedback={this.countPositiveFeedback}
            />
            ) : (
              <Notification message="There is no feedback" />
            )}
        </Section>
        <Section title="Your review">
          <ReviewForm />
        </Section>
      </div>
    )
  }
}


export default App;
