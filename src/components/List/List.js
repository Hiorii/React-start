import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns} = this.props;
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
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/*<div className={styles.creator}>*/}
        {/*  <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />*/}
        {/*</div>*/}
      </section>
    );
  }
}

export default List;
