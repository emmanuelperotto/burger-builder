import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Burger from '../Burger';
import BuildControls from '../build-controls/BuildControls';
import Modal from '../../app/ui/modal/Modal';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Modal />
        <Burger ingredients={this.props.ingredients} />
        <BuildControls
          totalPrice={this.props.totalPrice}
          purchasable={this.props.ingredients.length > 0}
        />
      </div>
    );
  }
}

BurgerBuilder.propTypes = {
  ingredients: PropTypes.array,
  totalPrice: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({ ...state.burgerBuilder });

export default connect(mapStateToProps)(BurgerBuilder);