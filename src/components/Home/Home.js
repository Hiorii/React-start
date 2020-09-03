import React from 'react';
import styles from './Home.scss';
import {settings, listData} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';

class Home extends React.Component {
  state = {
    listData: listData.list || [],
  }
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }

  render() {
    const {title, subtitle, lists, addList} = this.props;
    console.log(this.props.lists);
    return (
      <main className={styles.component}>
        {/*<div>*/}
        {/*    {this.state.listData.map(({key, ...listProps}) => (*/}
        {/*        <Menu key={key} {...listProps} />*/}
        {/*    ))}*/}
        {/*</div>*/}
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div>
          <Search />
        </div>
        <div>
          <Creator text={settings.listCreatorText} action={addList}/>
        </div>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;
