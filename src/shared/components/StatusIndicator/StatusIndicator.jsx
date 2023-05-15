import css from './statusIndicator.module.css';

const StatusIndicator = ({ customStyle }) => {
    return (
      <div className={css.statusContainer}>
        <ul>
          <li className={`${css.textStatus} ${customStyle}`}>Choose option</li>
          <li className={`${css.textStatus} ${customStyle}`}>Personal details</li>
          <li className={`${css.textStatus} ${customStyle}`}>More info</li>
        </ul>
      </div>
    );
};



export default StatusIndicator;
