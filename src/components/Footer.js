import React, { Component } from 'react';
import pubSub from '../utils/pubsub.js'

class Footer extends Component {
  _handleClick(){
    // [Step - 5] execute .trigger() method, the 'publisher'
    //            and pass info to the listener declared
    //            in the subscriber function Step-4
    pubSub.trigger('updateClickCount',1)
  }

  render() {
    return (
      <div className="footer">
        <h4>Get in Touch</h4>
        <button className="btn" onClick={ ()=> this._handleClick() }>Contact</button>

      </div>
    );
  }
}

export default Footer;
