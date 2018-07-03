import React, { Component } from 'react';
import pubSub from '../utils/pubsub.js'



class UserCard extends Component {
  _handleProfileInfoClick(){
    // [Step - 5] execute .trigger() method, the 'publisher'
    //            this will pass info to the 
    pubSub.trigger('updateClickCount', 1)
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.props.imgUrl}/>
        <h4>{this.props.name}</h4>
        <h6>{this.props.country} | {this.props.gen}</h6>
        <button
          className="btn btn--primary btn--small"
          onClick={ ()=>this._handleProfileInfoClick() }

        >
          See Profile
        </button>
      </div>
    );
  }
}

export default UserCard;
