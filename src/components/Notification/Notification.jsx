import propTypes from 'prop-types';
import { NotificationMessage } from './Notification.style';

export const Notification = ({ message }) => <NotificationMessage>{message}</NotificationMessage>;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};