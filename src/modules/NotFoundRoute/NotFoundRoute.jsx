import { Link } from 'react-router-dom';
import css from './not-found-route.module.css';

const NotFoundRoute = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.text}>Ooops! This page not found:(</h2>
        <div className={css.wrapper}></div>
        <Link to="/" className={css.link}>
          To main page
        </Link>
      </div>
    </section>
  );
};

export default NotFoundRoute;
