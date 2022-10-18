import s from './Controls.module.css';


export default function Controls({
  goodReview,
  neutralReview,
  badReview,
}) {
  return (
    <div className={s.box}>
      <button
        className={s.button}
        type='button'
        onClick={goodReview}>
        Good
      </button>
      <button
        className={s.button}
        type='button'
        onClick={neutralReview}>
        Neutral
      </button>
      <button
        className={s.button}
        type='button'
        onClick={badReview}>
        Bad
      </button>
    </div>
  )
}