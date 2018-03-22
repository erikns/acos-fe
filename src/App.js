import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Main from './Main'
import NewTodo from './NewTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="inner-header">
            <h1 className="App-title">TODO-app</h1>
          </div>
        </header>
        <main className="app-main">
          <Switch>
            <Route exact path='/' component={Main}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
