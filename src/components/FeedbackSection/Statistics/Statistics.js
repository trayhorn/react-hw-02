import s from './Statistics.module.css'

export default function Statistics({good, neutral, bad}) {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Statistics</h2>
      <div className={s.box}>
        <p className={s.text}>Good: {good}</p>
        <p className={s.text}>Neutral: {neutral}</p>
        <p className={s.text}>Bad: {bad}</p>
        <p className={s.text}>Total:</p>
        <p className={s.text}>Positive feedback:</p>
      </div>
    </section>
  )
}