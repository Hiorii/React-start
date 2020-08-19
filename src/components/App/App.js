import React from 'react';
import styles from './App.scss';
import {settings, listData} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';

class App extends React.Component {
  state = {
    listData: listData.list || [],
  }
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  addList(title) {
    //const index = this.state.listData.findIndex((columns => columns.title === title));
    this.setState(state => (
      {
        listData: [
          ...state.listData,
          {
            key: state.listData.length ? state.listData[state.listData.length - 1].key + 1 : 0,
            title,
            description: 'Interesting things I want to check out!',
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    const {title, subtitle, lists} = this.props;
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
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;
