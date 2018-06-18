import React, { Component } from 'react'
import Article from './Article'

class ArticleList extends Component {
  render() {
    const renderedArticles = this.props.articles.map((article, index) => <Article article={article} key={index} />)
    
    return (
      <div className='article-container'>
        {renderedArticles}
      </div>
    )
  }
}

export default ArticleList