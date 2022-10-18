import s from './Section.module.css';

export default function Section({title, children}) {
  return (
    <section className={s.section}>
      <h2 className={s.text}>{title}</h2>
      {children}
    </section>
  )
}