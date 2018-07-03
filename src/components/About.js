import React, { Component } from 'react';
import pubSub from '../utils/pubsub.js'

class AboutPage extends Component {
  _handleMoreInfoClick(){
    // [Step - 5] execute .trigger() method, the 'publisher'
    //            and pass info to the listener declared
    //            in the subscriber function Step-4
    
    pubSub.trigger('updateClickCount',1)
  }

  render() {
    return (
      <div className="about-page">
        <h2>About Page</h2>
        <h4>Our Mission</h4>
        <button onClick={ ()=> this._handleMoreInfoClick()  }className="btn btn--info">More Info</button>
        <h4>The Team</h4>
        <button onClick={ ()=> this._handleMoreInfoClick()  }className="btn btn--info">More Info</button>
        <h4>The Project</h4>
        <button onClick={ ()=> this._handleMoreInfoClick()  }className="btn btn--info">More Info</button>
      </div>
    );
  }
}

export default AboutPage;
