import s from './Controls.module.css';
import PropTypes from 'prop-types';

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

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
}