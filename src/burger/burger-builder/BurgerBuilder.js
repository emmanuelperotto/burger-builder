import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Burger from '../Burger';
import BuildControls from '../build-controls/BuildControls';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Burger ingredients={this.props.ingredients} />
        <BuildControls />
      </div>
    );
  }
}

BurgerBuilder.propTypes = {
  ingredients: PropTypes.array
};

const mapStateToProps = (state) => ({ ...state.burgerBuilder });

export default connect(mapStateToProps)(BurgerBuilder);