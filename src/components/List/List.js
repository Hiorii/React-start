import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }

  render() {
    console.log(this.props);
    return (
      <section className={styles.component}>
        {/*<div className={styles.component}>*/}
        {/*    <div className={styles.menuOuter}>*/}
        {/*        <button className={styles.menuOuterLink} href='>{this.props.title} v </button>*/}
        {/*        <div className={styles.menuInner}>*/}
        {/*            {this.state.columns.map(({key, ...columnProps}) => (*/}
        {/*                <MenuInner key={key} {...columnProps} action={item => this.showItem(item)}/>*/}
        {/*            ))}*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <Hero
          titleText={this.props.title}
          imageBack={this.props.image}
        />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div>
      </section>
    );
  }
}

export default List;
