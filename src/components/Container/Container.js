import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = props => {
  return (
    <div className={styles.component}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;