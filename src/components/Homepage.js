import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    console.log(this.props.match)
    return (
      <div className="home-page">
        <h2>Home Page</h2>
        <h4>
          Button Clicked Count <span className="click-count">{this.props.clickCount}</span>
        </h4>
      </div>
    );
  }
}

export default HomePage;
