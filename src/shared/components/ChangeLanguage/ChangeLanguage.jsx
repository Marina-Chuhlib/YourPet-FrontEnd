import css from './ChangeLanguage.module.css';
import i18n from 'modules/i18n/config'; // Import the initialized i18n object

const options = [
  {
    label: 'EN',
    value: 'en',
  },
  {
    label: 'UA',
    value: 'ua',
  },
];

const ChangeLanguage = () => {
//   const { i18n } = useTranslation();

  function changeLanguage(e) {
    const whatLanguage = e.target.value;
    localStorage.setItem('whatLanguage', whatLanguage);
    const language = localStorage.getItem('whatLanguage');

    i18n.changeLanguage(language);
  }

  const language = localStorage.getItem('whatLanguage');

  return (
    <div className={css.buttonLanguage}>
      <select
        className={css.changeLang}
        value={language || ''}
        onChange={changeLanguage}
      >
        {options.map((option, idx) => (
          <option key={idx} className={css.changeLangItem} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeLanguage;



