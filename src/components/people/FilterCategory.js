import React, { Component } from 'react'
import '../../styles/people/filterCategory.css'

class FilterCategory extends Component {
  render(){
    const defaultChecked = this.props.selectedCategory === 'default' ? true : false
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
          <input type='radio' value='default' onChange={this.props.handleFilter} name='category' id='defaultFilter' checked={defaultChecked} />
          <label>All Categories</label>
        </div>

        {renderedCategories}
      </div>
    )
  }
}

export default FilterCategory