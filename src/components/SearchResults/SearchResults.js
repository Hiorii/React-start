import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import propTypes from 'prop-types';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {
  static propTypes = {
    title: propTypes.node,
    icon: propTypes.node,
    index: propTypes.number,
    cards: propTypes.array,
    columns: propTypes.array,
    id: propTypes.string,
  }

  static defaultProps = {
    icon: settings.search.icon,
    title: settings.search.resultTitle,
  };


  render() {
    const { title, icon, cards} = this.props;

    return (
      <Container>
        <section className={ styles.component }>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            {title}
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <div key={ cardData.id } className={ styles.wrapper }>
                <Card key={cardData.id} {...cardData} />
                <Link className={styles.link} to={`/list/${cardData.listId}`}>
                  <p>Check out the list</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;