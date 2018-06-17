import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import PeopleList from './components/PeopleList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Zola Technical Test!</h1>
          <p>This project was created using create-react-app</p>
        </header>
        <PeopleList />
      </div>
    );
  }
}

export default App;
