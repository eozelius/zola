# Zola Technical Test

## Getting Started
To get started copy or clone directory, and run `$ yarn start` or `$ npm start`.  NOTE: Make sure you have all dependencies of create-react-app installed.  The app should start the server and open your default browser to localhost:3000.  You can also see the app by navigating to localhost:3000

## Dependencies
  - node v8.10.0
  - npm v5.7.1
  - create-react-app v1.5.2
  - webpack v3.6.0
  - yarn 1.3.2

### People Grid
Components can be found in src/components/people/.  A specific style sheet can be found for each component in src/styles/people/
  - PeopleList => Stateful, renders all other components and passes them data/callbacks via props.  
    - this.state = { selectedCategory: 'default', sortBy: 'default' }
    - this.people = [...people] tracks original list of people.  This variable will not change.
    - this.categories = ['cat1', 'cat2', 'cat3' ...] => unique list of all the categories that occured in the People list.
    - Responsible for implementing operations to Sort or Filter people.

  - Person => Stateless Functional, renders HTML a single Person, no callbacks necessary.
  - SortPeople => Stateless Functional - renders HTML `<select>` to Sort by default/featured, name (A-Z) or Priority.
    - CallBacks: 
      - when `<select>` changes, pass the event back up to PeopleList
  - FilterCategory => Stateless, renders HTML `<input type='radio'>`'s to filter results by category.
    - CallBacks:
      - when a radio button is clicked, pass the event back up to PeopleList

### Wedding Design
Note Splash image was not included, so I swapped in a similar image that also looked good.
  - Wedding
  - Header
  - Splash
  - ArticleList
  - Article