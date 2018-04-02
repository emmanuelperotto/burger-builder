import React from 'react';
import './BuildControls.css';
import BuildControl from './build-control/BuildControl';
import PropTypes from "prop-types";

const controls = [
  'Salad',
  'Bacon',
  'Cheese',
  'Meat'
];


const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>Current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>

      {controls.map(element => (
        <BuildControl
          key={element}
          label={element}
        />
      ))}
    </div>
  );
};

BuildControls.propTypes = {
  totalPrice: PropTypes.number.isRequired
};

export default BuildControls;