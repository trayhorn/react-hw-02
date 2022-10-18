import s from './Statistics.module.css'

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedback
}) {
  return (
    <div className={s.box}>
      <p className={s.text}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral}</p>
      <p className={s.text}>Bad: {bad}</p>
      <p className={s.text}>Total: {total()}</p>
      <p className={s.text}>
        Positive feedback:
        {positiveFeedback()
          ? ` ${positiveFeedback()}`
          : ` 0`} %
      </p>
    </div>
  )
}