import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import './Home.css'

class Home extends Component {
  
  imLucky(){
    let someUrl = "", alphabet = "abcdefghijklmnopqrstuvwxyz"
    for(let i=0;i<10;i++){
      someUrl += alphabet[Math.floor(Math.random()*25)]
    }

    return(
      <div>
        <NavLink to={"/"+someUrl}>i'm lucky</NavLink>
      </div>
    )
  }

  render(){
    return (
      <div className="Home">
        Home
        {this.imLucky()}
      </div>
    )
  }
}

export default Home;
