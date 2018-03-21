import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

import ItemList from './ItemList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO-app</h1>
        </header>
        <main class="app-main">
          <Switch>
            <Route exact path='/' component={ItemList}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;