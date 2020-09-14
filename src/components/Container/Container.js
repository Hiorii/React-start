import React from 'react';
import styles from './Container.scss';
import propTypes from 'prop-types';


const Container = props => (
  <div className={ styles.component }>
    {props.children}
  </div>
);

Container.propTypes = {
  children: propTypes.node,
};

export default Container;