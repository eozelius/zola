import React, { Component } from 'react';

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

export default SortPeople