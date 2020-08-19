import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.node,
    icon: PropTypes.node,
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon
              name={this.props.icon}
            />
          </span>{this.props.title}
        </h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*<div>*/}
        {/*  <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>*/}
        {/*</div>*/}
      </section>
    );
  }
}

export default Column;