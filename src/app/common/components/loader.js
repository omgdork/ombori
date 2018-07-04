import React, { Component } from 'react';
//import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class Loader extends Component {
  render() {
    return (<span className="loader"></span>);
  }
}

Loader.propTypes = {
  isStarted: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
};

Loader.defaultProps = {
  isStarted: false,
  duration: 3, // In seconds.
};

export default Loader;
