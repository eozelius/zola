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
Renders a list of people from a hard-coded set of people.  Each person has 'name', 'age', 'priority' and 'category'.  Background color is determined by 'priority.'  Results can be sorted by 'Featured (default)', 'Name (a-z)', or 'Priority.'  Results can also be filtered by Category.  If Results are sorted and filtered at the same time, the list of people will first be filtered, then sorted.

Components can be found in src/components/people/.  Specific style sheets can be found for each component in src/styles/people/
  #### Components
  - `PeopleList` => Stateful component, renders all other components and passes them data/callbacks via props.  Also responsible for Sorting/Filtering people.
    - this.state = { selectedCategory: 'default', sortBy: 'default' }
    - this.people = [...people] tracks original list of people.  This will not change.
    - this.categories = ['cat1', 'cat2', 'cat3' ...] => unique list of all the categories that occured in the People list.  This will not change.

  - `Person` => Stateless component, renders HTML a single Person, no callbacks.

  - `SortPeople` => Stateless component - renders HTML `<select>` to Sort by default/featured, name (A-Z) or Priority.
    - CallBack - when `<select>` changes, pass the event back up to PeopleList

  - `FilterCategory` => Stateless component, renders HTML `<input type='radio'>`s to filter results by category.
    - CallBack - when a radio button is clicked, pass the event back up to PeopleList

### Wedding Design
Personalized page to display information about a wedding.  Should be built to spec based off of Sketch/Comp documents provided, should also be responsive.  I chose to also build this with React, making sure that all the data rendered (Splash image, location, date, proposal/how met) are all customizable.  Note default Splash image was not included, so I swapped in a similar image that also looked good.

Components can be found in src/components/wedding.  Specific style sheets can be found for each component in src/styles/wedding/
  #### Components
  - `Wedding` => Stateless component, renders `<Header>`, `<Splash>`, `ArticleList` and passes them wedding data (date, location, who etc.) via props
  - `Header` => Stateless component, renders the header bar that has who is being married, the location, date and hashtag.
  - `Splash` => Stateless component, renders the Splash image and title.
  - `ArticleList` => Stateless component, renders a list of `<Article>`s ('The Propsal', 'How we Met'...)
  - `Article` => Stateless component, renders a single Article, left side contains an image, title and date.  The right side contains the Article text content.