import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BuildControl.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BuildControlActions from './BuildControlActions';

class BuildControl extends Component {
  render() {
    return (
      <div className="BuildControl">
        <div className="Label">{this.props.label}</div>

        <button
          className="Less"
          onClick={() => this.props.onRemoveIngredient(this.props.label)}
          disabled={this.props.ingredients.indexOf(this.props.label) === -1}
        >
          Less
        </button>

        <button
          className="More"
          onClick={() => this.props.onAddIngredient(this.props.label)}
        >
          More
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.burgerBuilder });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...BuildControlActions
  }, dispatch);
};

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  ingredients: PropTypes.array,
  onAddIngredient: PropTypes.func,
  onRemoveIngredient: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControl);