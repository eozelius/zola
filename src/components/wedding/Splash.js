import React, { Component } from 'react'
import '../../styles/wedding/splash.css'
import splashImage from '../../images/splash.jpg'

class Splash extends Component {
  render () {
  	const backgroundImage = this.props.data.image || splashImage
  	const splashStyle = {
  		backgroundImage: `url(${backgroundImage})`
  	}

    return (
      <div className='splash-container' style={splashStyle}>
        <h1 className='splash-title'>{this.props.data.title}</h1>
      </div>
    )
  }
}

export default Splash