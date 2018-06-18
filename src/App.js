import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import PeopleList from './components/people/PeopleList'
import Wedding from './components/wedding/Wedding'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Zola Technical Test!</h1>
            <Link to='/' className='link'>
              <p>People Grid</p>
            </Link>
            <Link to='/wedding' className='link'>
              <p>Wedding Site</p>
            </Link>
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
