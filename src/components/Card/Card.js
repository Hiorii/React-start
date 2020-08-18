import React from 'react'
import styles from "../Card/Card.scss";
import PropTypes from 'prop-types';

class Card extends React.Component{
    static propTypes= {
        title: PropTypes.node,
    }
    render() {
        return (
            <section className={styles.component}>
                {this.props.title}
            </section>
        )
    }
}

export default Card