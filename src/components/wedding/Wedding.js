import React, { Component } from 'react'
import Header from './Header'
import ArticleList from './ArticleList'
import Splash from './Splash'
import branch from '../../images/Palmier1-White.png'
import splashImage from '../../images/splash.jpg'
import '../../styles/wedding/wedding.css'

class Wedding extends Component {
  render(){
    const data = {
      header: {
        date: 'March 10th, 2018',
        location: 'Memphis',
        hashtag: '#cynthiaandwilliams',
        title: 'Cynthia & William'
      },

      splash: {
        image: splashImage,
        title: 'We\'re getting Married'
      },

      articles: [
        {
          body: 'Long story short: we both swiped right. Some would call it a true stroke of fate (or a glitch in the app’s system), when in February 2014 Nat re-downloaded Tinder - after a 6 month hiatus - at a bachelor party in Miami. As chance would have it, one of his matches was Carolyn, who was back in chilly NYC. After a few good pickup lines, a long discussion about food, a recap of Carolyn’s recent workouts and discovering we had mutual friends, we arranged to meet for a date the next week at the cocktail bar, Employee’s Only.',
          title: 'how we met',
          date: '3.05.18',
          image: branch
        },{
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra dolor sit amet dui finibus, vitae sagittis dolor suscipit. Aenean accumsan mollis lacus sed sagittis. Praesent lorem urna, e!citur nec enim in, pretium hendrerit justo. Morbi mollis, enim ut sagittis tempus, arcu nisi finibus magna, non ultrices arcu elit sed enim.',
          title: 'the proposal',
          date: '3.05.18',
          image: branch
        }
      ]
    }

    return (
      <div id='wedding-container'>
        <Header data={data.header} />
        <Splash data={data.splash}/>
        <ArticleList articles={data.articles} />
      </div>
    )
  }
}

export default Wedding