import React from 'react';
import styles from './App.scss';
import Main from "../Main/Main";
import {pageContents, settings, listMenu, listData} from '../../data/dataStore';
import Creator from "../Creator/Creator";
import List from "../List/List";

class App extends React.Component {
    state = {
        listData: listData.list || [],
    }
    addList(title){
        this.setState(state => (
            {
                listData: [
                    ...state.listData,
                    {
                        key: state.listData.length ? state.listData[state.listData.length-1].key+1 : 0,
                        title,
                        description: "Interesting things I want to check out!",
                        image: "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png",
                        columns: []
                    }
                ]
            }
        ));
    }
  render() {
    return (
      <main className={styles.component}>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          <div>
              <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
          </div>
          <div>
              {this.state.listData.map(({key, ...listProps}) => (
                  <List key={key} {...listProps} />
              ))}
          </div>
          <Main {...listMenu} />
      </main>
    )
  }
}

export default App;
