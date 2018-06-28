import React, { Component } from 'react';

/*// STEP-06.a*/
import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar.js'

/*// STEP-06.b */
import HomePage from './components/Homepage.js'
import AboutPage from './components/About.js'
import UserList from './components/UserList.js'
import NoMatch404 from './components/NoMatch404.js'


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar/>
        {/*// STEP-06.c*/}
        <Switch>
          <Route exact path="/gender/:gen" component={UserList}/>
          <Route exact path="/users/:nat" component={UserList}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/" component={HomePage}/>
          <Route component={NoMatch404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
