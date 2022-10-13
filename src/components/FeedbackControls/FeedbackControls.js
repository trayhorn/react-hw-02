import React, {Component} from 'react'
import s from './FeedbackControls.module.css';

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

  render() {
    return (
      <div>
        <div className={s.container}>
          <p className={s.text}>Please leave Feedback</p>
          <button
            className={s.button}
            type='button'
            onClick={this.goodReview}>
            Good
          </button>
          <button
            className={s.button}
            type='button'
            onClick={this.neutralReview}>
            Neutral
          </button>
          <button
            className={s.button}
            type='button'
            onClick={this.badReview}>
            Bad
          </button>
        </div>

        <section className={s.container}>
          <h2 className={s.title}>Statistics</h2>
          <div className={s.box}>
            <p className={s.text}>Good: {this.state.good}</p>
            <p className={s.text}>Neutral: {this.state.neutral}</p>
            <p className={s.text}>Bad: {this.state.bad}</p>
          </div>
        </section>
      </div>
    )
  }
}


export default FeedbackControls;
