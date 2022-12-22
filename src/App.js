import s from './App.module.css';
import { useState } from "react";
import Section from './components/Section';
import Controls from './components/Controls';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import ReviewForm from './components/Form/ReviewForm';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = (e) => {
    switch (e.target.name) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }

  const options = ['Good', 'Neutral', 'Bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedback = () => {
    const total = good + neutral + bad;
    return Math.round(good / total * 100);
  }

  return (
    <div className={s.app}>
      <Section title="Please leave Feedback">
        <Controls
          options={options}
          onLeaveFeedback={onButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positiveFeedback={countPositiveFeedback}
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

export default App;
