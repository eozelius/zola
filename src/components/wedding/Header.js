import React, { Component } from 'react'
import '../../styles/wedding/header.css'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-items'>
          <div className='header-item date'>
            <span>{this.props.data.date}</span>
          </div>

          <div className='header-item location'>
            <span>{this.props.data.location}</span> 
          </div>

          <div className='header-item right hashtag'>
            <span>{this.props.data.hashtag}</span>
          </div>
        </div>

        <div className='header-title'>
          <h1>{this.props.data.title}</h1>
        </div>
      </div>
    )
  }
}

export default Header