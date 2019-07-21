import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Home extends Component {
  render(){
    return (
      <div className="Home">
        <div>Kek</div>
        <div>go to <NavLink to="/">Home</NavLink></div>
      </div>
    )
  }
}

export default Home;
