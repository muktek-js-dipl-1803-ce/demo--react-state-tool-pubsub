import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

import HomePage from './components/Homepage.js'
import AboutPage from './components/About.js'
import UserList from './components/UserList.js'
import NoMatch404 from './components/NoMatch404.js'

// [Step - 3] import pubsub module into <App>
import pubSub from './utils/pubsub.js'

class App extends Component {
  constructor(args){
    super(args)

    // [Step - 4] declare pubsub 'subscriber'
    //            the callback function will update the state
    //            note the `num` argument which is the data from .trigger()
    //            in Step 5

    pubSub.on('updateClickCount', (num)=>{
      this.setState({
        buttonClickCount: this.state.buttonClickCount + num
      })
    })

    // [Step - 1] declare global state values in <App/> component
    this.state = {
      buttonClickCount: 0,
    }


  }


  render() {
    return (
      <div id="app-container">
        <Navbar/>
        <Switch>
          <Route exact path="/gender/:gen" component={UserList}/>
          <Route exact path="/users/:nat" component={UserList}/>
          <Route exact path="/about" component={AboutPage}/>

          {/* [Step - 2]
            pass global App state as props to component
            (note we can pass a function to `<Route component/>`
            also, {...routerProps} passes the route information to the component so that we can access
            route information under this.props.match )
            */}
          <Route exact path="/"
            component={ (routerProps)=> <HomePage {...routerProps} clickCount={this.state.buttonClickCount} /> }
            />
          <Route component={NoMatch404}/>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
