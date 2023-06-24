import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <div>
          <p>My</p>
          <p>Phone</p>
          <p>Book</p>
        </div>
        <span className={css.phone}>&#9743;</span>
      </h1>
    </div>
  );
}