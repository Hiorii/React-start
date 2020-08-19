import React from 'react';
import styles from './App.scss';
import {pageContents, settings, listData} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import List from '../List/List';

class App extends React.Component {
  state = {
    listData: listData.list || [],
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
    console.log(this.state.listData);
    return (
      <main className={styles.component}>
        {/*<div>*/}
        {/*    {this.state.listData.map(({key, ...listProps}) => (*/}
        {/*        <Menu key={key} {...listProps} />*/}
        {/*    ))}*/}
        {/*</div>*/}
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
        <div>
          {this.state.listData.map(({key, ...listProps}) =>
            <List key={key} {...listProps} />
          )}

        </div>
      </main>
    );
  }
}

export default App;
