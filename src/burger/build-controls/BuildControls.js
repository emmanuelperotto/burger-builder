import React from 'react';
import './BuildControls.css';
import BuildControl from './build-control/BuildControl';

const controls = [
  'Salad',
  'Bacon',
  'Cheese',
  'Meat'
];


const BuildControls = () => {
  return (
    <div className="BuildControls">
      {controls.map(element => (
        <BuildControl
          key={element}
          label={element}
        />
      ))}
    </div>
  );
};

export default BuildControls;