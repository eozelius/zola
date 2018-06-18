import React, { Component } from 'react'
import '../../styles/wedding/article.css'

class Article extends Component {
  render() {
    return (
      <div className='article'>
        <section className='article-left'>
          <img className='image' src={this.props.article.image} alt='article' />
          <h2>{this.props.article.title}</h2>
          <span className='date'>{this.props.article.date}</span>
        </section>

        <section className='article-right'>
          <p className='content'>
            {this.props.article.body}
          </p>
        </section>
      </div>
    )
  }
}

export default Article