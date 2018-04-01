import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BurgerBuilderActions from './BurgerBuilderActions';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        Builder controls
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.burgerBuilder });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...BurgerBuilderActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);