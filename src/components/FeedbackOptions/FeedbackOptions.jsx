import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnNames = Object.keys(options);

  return (
    <div className={css.feedback}>
      <h1 className={css.feedback__title}>Please leave feedback</h1>
      <div>
        {btnNames.map(btn => (
          <button
            type="button"
            key={btn}
            value={btn}
            className={css.feedback_buttons}
            onClick={e => onLeaveFeedback(e)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
