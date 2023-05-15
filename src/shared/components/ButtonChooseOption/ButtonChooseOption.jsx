import css from './buttonChooseOption.module.css';

const ButtonChooseOption = () => {
  return (
    <div className={css.buttonContainer}>
      <ul>
        <li className={css.buttonChoose}>your pet</li>
        <li className={css.buttonChoose}>sell</li>
        <li className={css.buttonChoose}>lost/found</li>
        <li className={css.buttonChoose}>in good hands</li>
      </ul>
    </div>
  );
};

export default ButtonChooseOption;
