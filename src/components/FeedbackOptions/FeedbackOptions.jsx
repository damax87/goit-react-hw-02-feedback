import propTypes from 'prop-types';
import { FeedbackBtnCantainer } from './FeedbackOptions.style';
import { FeedbackBtn } from './FeedbackOptions.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackBtnCantainer>
    {options.map((option, index) => (
      <FeedbackBtn
        key={index}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackBtn>
    ))}
  </FeedbackBtnCantainer>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};