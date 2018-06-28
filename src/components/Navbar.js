import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gender/M">Men Users</Link>
        <Link to="/gender/F">Female Users</Link>

      </div>
    );
  }
}

export default Nav;
