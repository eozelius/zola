import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class People extends Component {
  constructor(){
    super()
    this.state = {
      renderedPeople: [],
      defaultPeople: [],

    }
  }

  componentDidMount() {
    const people = [
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
      renderedPeople: people,
      defaultPeople: people 
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

  sort = (e) => {
    const sortBy = e.target.value

    switch(sortBy) {
      case 'name':
        this.sortName()
        break
      case 'priority':
        this.sortPriority()
        break
      default:
        this.sortDefault()
    }    
  }

  sortName = () => {
    let namePeople = this.state.defaultPeople.slice(0)
    namePeople.sort((a,b) => {
      if(a.name < b.name){ return -1 }
      if(a.name > b.name){ return 1 }
      return 0;
    })

    this.setState({
      renderedPeople: namePeople
    })
  }

  sortPriority = () => {
    let priorityPeople = this.state.defaultPeople.slice(0)

    priorityPeople.sort((a,b) => {
      return a.priority - b.priority
    })

    this.setState({
      renderedPeople: priorityPeople
    })
  }

  sortDefault = () => {
    const defaultPeople = this.state.defaultPeople.slice(0)

    this.setState({
      renderedPeople: defaultPeople
    })
  }

  render() {
    const renderedPeople = this.state.renderedPeople.map((person, index) => {
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

    return (
      <div id='people-container'>
        <div className='sort-container'>
          <p>Sort By</p>
          <select className='sort-people' onChange={this.sort} >
            <option value='featured'>Featured</option>
            <option value='name'>Name A-Z</option>
            <option value='priority'>Priority</option>
          </select>
        </div>

        <div className='filer-container'>

        </div>

        <div className='renderedPeople-container'>
          {renderedPeople}
        </div>
      </div>
    )
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
