import React, { Component } from 'react'
import '../../styles/wedding/header.css'

class Header extends Component {
  render() {
    const {data} = this.props

    return (
      <div className='header'>
        <div className='header-items'>
          <div className='header-item date'>
            <span>{data.date}</span>
          </div>

          <div className='header-item location'>
            <span>{data.location}</span> 
          </div>

          <div className='header-item right hashtag'>
            <span>{data.hashtag}</span>
          </div>
        </div>

        <div className='header-title'>
          <h1>{data.title}</h1>
        </div>
      </div>
    )
  }
}

export default Header