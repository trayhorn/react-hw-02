import s from './Controls.module.css';


export default function Controls({options, onLeaveFeedback}) {
  return (
    <div className={s.box}>
      {options.map(option => {
        return (
          <button
            type='button'
            className={s.button}
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}