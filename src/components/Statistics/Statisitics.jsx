import propTypes from 'prop-types';
import { StatisticsCantainer } from './Statisitics.style';
import { StatisticsItem } from './Statisitics.style';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatisticsCantainer>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positivePercentage} %
      </StatisticsItem>
    </StatisticsCantainer>
  );
  
  Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
  };