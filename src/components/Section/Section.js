import s from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({title, children}) {
  return (
    <section className={s.section}>
      <h2 className={s.text}>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
}