import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-items'>
          <div className='header-item date'>
            <span>March 10th, 2018</span>
          </div>

          <div className='header-item location'>
            <span>Memphis</span> 
          </div>

          <div className='header-item right hashtag'>
            <span>#cynthiaandwilliam</span>
          </div>
        </div>

        <div className='header-title'>
          <h1>Cynthia & William</h1>
        </div>
      </div>
    )
  }
}

export default Header