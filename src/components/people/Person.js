import React, { Component } from 'react'

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

export default Person