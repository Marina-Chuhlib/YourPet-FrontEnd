import css from './main.module.css';

const Main = () => {
  return (
    <>
      <section className={css.sectionMain}>
        <div className="container">
          <div className={css.positionText}>
            <h1 className={css.text}>Take good care of your small pets</h1>

            <div className={css.wrapper}></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Main;
