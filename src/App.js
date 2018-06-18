import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import './App.css'
import PeopleList from './components/PeopleList'
import Wedding from './components/Wedding'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Zola Technical Test!</h1>
            <NavLink to='/' className='link'>
              <p>People Grid</p>
            </NavLink>
            <NavLink to='/wedding' className='link'>
              <p>Wedding Site</p>
            </NavLink>
          </header>

          <Switch>
            <Route exact path='/'  component={PeopleList} />
            <Route path='/wedding' component={Wedding} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
