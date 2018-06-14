import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class People extends Component {
  constructor(){
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    const data = [
      {
        "name": "Joe",
        "age": 24,
        "priority": 1,
        "category": "cat2"
      },{
        "name": "Jane",
        "age": 76,
        "priority": 4,
        "category": "cat1"
      },{
        "name": "Kevin",
        "age": 32,
        "priority": 2,
        "category": "cat2"
      },{
        "name": "Lucy",
        "age": 54,
        "priority": 1,
        "category": "cat3"
      },{
        "name": "Colin",
        "age": 34,
        "priority": 3,
        "category": "cat1"
      },{
        "name": "Franny",
        "age": 36,
        "priority": 2,
        "category": "cat3"
      },{
        "name": "Neil",
        "age": 74,
        "priority": 4,
        "category": "cat2"
      },{
        "name": "Katy",
        "age": 55,
        "priority": 3,
        "category": "cat2"
      }
    ]

    this.setState({
      people: data 
    })
  }

  bgColor(category) {
    let bg = ''
    switch(category) {
      case 'cat1':
        bg = 'orange'
        break
      case 'cat2':
        bg = 'green'
        break
      case 'cat3':
        bg = 'blue'
        break
      case 'cat4':
        bg = 'purple'
        break
      default:
        bg = 'transparent'
    }
    return bg
  }

  render() {
    const renderedPeople = this.state.people.map((person, index) => {
      const bgColor = this.bgColor(person.category)
      const personStyle = { backgroundColor: bgColor }

      return (
        <div className='person' style={personStyle} key={index} >
          <h2 className='name'>{person.name}</h2>
          <p className='age'>{person.age}</p>
          <p className='category'>{person.category}</p>
        </div>
      )
    })

    return <div id='people-container'>{renderedPeople}</div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <People />
      </div>
    );
  }
}

export default App;
