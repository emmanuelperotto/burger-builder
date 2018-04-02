import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = (props) => {
  return (
    <div className="Modal">
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.array.isRequired
};

export default Modal;