import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>My One-page Page</h1>
        </header>
        <Router basename={process.env.PUBLIC_URL+'/'}>
          <Switch>
            <Route path='/' strict component={HomePage} />
            <Route path='/home' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/contact' component={ContactPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {

    return (
      <div>
      <nav>
        <Link to='/about'>Click to visit the About Page</Link>
        <br/>
        <Link to='/contact'>Click to visit the Contact Page</Link>
      </nav>
      <p> This is the home page</p>
     
      </div>
    );
  }
}

class AboutPage extends Component {
  render() {
   let data = [{
    "trait":"cool"
},
{
    "trait":"funny"
},
 
{ 
     "trait":"social"
},
{ 
    "trait":"confident"
},
{ 
    "trait":"powerful"
},
{ 
    "trait":"empowered"
}
]

    let listItems = data.map(function (object) {
      return <li key={object.trait}> {object.trait} </li>
    })

    return (
      <div>
        <nav>
      <Link to='/home'>Click to visit the Home Page</Link>
      <br/>
      <Link to='/contact'>Click to visit the Contact Page</Link>
      </nav>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

class ContactPage extends Component {
  render() {
    return (
      <div>
        <nav>
      <Link to='/about'>Click to visit the About Page</Link>
      <br/>
      <Link to='/home'>Click to visit the Home Page</Link>
      </nav>
        <h2> Contact Us At:</h2>
        <h3> fakeemail@gmail.com</h3>
      </div>
    );
  }
}


export default App;
