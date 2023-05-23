import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statictics = ({
  good,
  bad,
  neutral,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.statistics__title}>Statistics</h2>
      <ul className={css.statictics__list}>
        <li>Good: {good}</li>
        <li> Bad: {bad}</li>
        <li> Neutral: {neutral}</li>
        <li> Total: {countTotalFeedback}</li>
        <li>
          Positive feedback: <span>{countPositiveFeedbackPercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
export default Statictics;
