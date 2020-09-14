import React from 'react';
import propTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${ props.name }`}></i>);

Icon.propTypes = {
  name: propTypes.node,
};


export default Icon;
