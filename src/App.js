import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SortPeople extends Component {
  render(){
    return (
      <div className='sort-people-container'>
        <p>Sort By</p>
        <select className='sort-people' onChange={this.props.handleSort} name='sort-by' >
          <option value='default'>Featured</option>
          <option value='name'>Name A-Z</option>
          <option value='priority'>Priority</option>
        </select>
      </div>
    )
  }
}

class FilterCategory extends Component {
  render(){
    const renderedCategories = this.props.categories.map((cat, index) => {
      return (
        <div className='input-control' key={index}>
          <input type='radio' value={cat} onChange={this.props.handleFilter} name='category' />
          <label>{cat}</label>
        </div>
      )
    })

    return (
      <div className='filter-people-container'>
        <p>Filter By Category</p>

        <div className='input-control'>
          <input type='radio' value='default' onChange={this.props.handleFilter} name='category' id='defaultFilter' />
          <label>All Categories</label>
        </div>

        {renderedCategories}
      </div>
    )
  }
}

class Person extends Component {
  bgColor(priority) {
    let bg = ''
    switch(priority) {
      case 1:
        bg = 'orange'
        break
      case 2:
        bg = 'green'
        break
      case 3:
        bg = 'blue'
        break
      case 4:
        bg = 'purple'
        break
      default:
        bg = 'transparent'
    }
    return bg
  }

  render() {
    const bgColor = this.bgColor(this.props.person.priority)
    const personStyle = { backgroundColor: bgColor }

    return (
      <div className='person' style={personStyle} >
        <h2 className='name'>{this.props.person.name}</h2>
        <p className='age'>{this.props.person.age}</p>
        <p className='category'>{this.props.person.category}</p>
      </div>
    )
  }
}

class PeopleList extends Component {
  constructor(){
    super()
    
    let categories = new Set()
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

    this.people = people
    people.forEach((person) => categories.add(person.category))
    this.categories = Array.from(categories).sort()

    this.state = {
      selectedCategory: 'default',
      sortBy: 'default',
    }
  }

  updateCategory = (e) => {
    this.setState({selectedCategory: e.target.value})
  }

  updateSort = (e) => {
    this.setState({sortBy: e.target.value})
  }

  sortPeople = (people) => {
    switch(this.state.sortBy) {
      case 'name':
        return this.sortName(people)
        break
      case 'priority':
        return this.sortPriority(people)
        break
      default:
        return people
    }
  }

  sortName = (people) => {
    return people.slice(0).sort((a,b) => {
      if(a.name < b.name){ return -1 }
      if(a.name > b.name){ return 1 }
      return 0;
    })
  }

  sortPriority = (people) => {
    return people.slice(0).sort((a,b) => {
      return a.priority - b.priority
    })
  }

  filterPeople = (people) => {
    if(this.state.selectedCategory === 'default'){
      return people
    }

    return people.filter((person) => person.category === this.state.selectedCategory)
  }

  render() {
    const filteredPeople = this.filterPeople(this.people)
    const sortedPeople   = this.sortPeople(filteredPeople)
    const renderedPeople = sortedPeople.map((person, index) => <Person person={person} key={index} />)

    return (
      <div id='people-container'>
        <SortPeople handleSort={this.updateSort} />
        <FilterCategory categories={this.categories} handleFilter={this.updateCategory} />

        <div className='people-list-container'>
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
        <PeopleList />
      </div>
    );
  }
}

export default App;
