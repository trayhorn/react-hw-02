import s from './Controls.module.css';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function Controls({options, onLeaveFeedback}) {
  return (
    <div className={s.box}>
      {options.map(option => {
        return (
          <Button
            variant="contained"
            name={option}
            onClick={onLeaveFeedback}
            key={option}
          >
            {option}
          </Button>
        )
      })}
    </div>
  )
}

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
}