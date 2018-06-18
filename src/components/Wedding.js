import React, { Component } from 'react'
import branch from '../images/Palmier1-White.png'

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

class Article extends Component {
  render() {
    return (
      <div className='article'>
        <section className='article-left'>
          <img className='image' src={branch} alt='article-image' />
          <h2>{this.props.article.title}</h2>
          <span className='date'>{this.props.article.date}</span>
        </section>

        <section className='article-right'>
          <p className='body'>
            {this.props.article.body}
          </p>
        </section>
      </div>
    )
  }
}

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

class Splash extends Component {
  render () {
    return (
      <div className='splash-container'>
        <h1 className='splash-title'>we're getting<br/> married</h1>
      </div>
    )
  }
}

class Wedding extends Component {
	constructor(){
    super()

    const data = {
      articles: [
        {
          body: 'Long story short: we both swiped right. Some would call it a true stroke of fate (or a glitch in the app’s system), when in February 2014 Nat re-downloaded Tinder - after a 6 month hiatus - at a bachelor party in Miami. As chance would have it, one of his matches was Carolyn, who was back in chilly NYC. After a few good pickup lines, a long discussion about food, a recap of Carolyn’s recent workouts and discovering we had mutual friends, we arranged to meet for a date the next week at the cocktail bar, Employee’s Only.',
          title: 'how we met',
          date: '3.05.18'
        },{
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, vitae sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, e!citur nec enim in, pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non ultrices arcu elit sed enim.',
          title: 'the proposal',
          date: '3.05.18'
        }
      ]
    }

    this.articles = data.articles
  }

  render(){
    return (
      <div id='wedding-container'>
        <Header />
        <Splash />
        <ArticleList articles={this.articles} />
      </div>
    )
  }
}

export default Wedding