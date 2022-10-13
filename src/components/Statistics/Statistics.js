import s from './Statistics.module.css'

export default function Statistics() {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Statistics</h2>
      <div className={s.box}>
        <p className={s.text}>Good:</p>
        <p className={s.text}>Neutral:</p>
        <p className={s.text}>Bad:</p>
      </div>
    </section>
  )
}