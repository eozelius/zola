import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import PeopleList from './components/PeopleList'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Zola Technical Test!</h1>
            
            <Link to='/' className='link'>
              <p>People Grid</p>
            </Link>

            <Link to='/wedding' className='link'>
              <p>Wedding Site</p>
            </Link>

          </header>

          <Switch>
            <Route exact path='/' component={PeopleList} />
            <Route path='/wedding' component={PeopleList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
