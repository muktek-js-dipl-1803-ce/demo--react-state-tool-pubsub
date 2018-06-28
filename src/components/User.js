import React, { Component } from 'react';



class UserCard extends Component {
  render() {
    return (
      <div className="user-card">
        <img src={this.props.imgUrl}/>
        <h4>{this.props.name}</h4>
        <h6>{this.props.country} | {this.props.gen}</h6>
      </div>
    );
  }
}

export default UserCard;
