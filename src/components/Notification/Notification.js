import React from 'react';
import './Notification.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <p className='text'>{message}</p>;

export default Notification;





Notification.propTypes = {
  message: PropTypes.string.isRequired,
};