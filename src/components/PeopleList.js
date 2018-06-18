import React, { Component } from 'react'
import SortPeople from './SortPeople'
import FilterCategory from './FilterCategory'
import Person from './Person'


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
    people.forEach((person) => categories.add(person.category)) // Creates a distinct list of categories from people ex: ['cat1', 'cat3', 'catN' ...]
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
        <h2 className='title'>People Grid</h2>

        <SortPeople handleSort={this.updateSort} />
        <FilterCategory categories={this.categories} handleFilter={this.updateCategory} selectedCategory={this.state.selectedCategory} />

        <div className='people-list-container'>
          {renderedPeople}
        </div>
      </div>
    )
  }
}

export default PeopleList