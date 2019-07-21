import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import LoginOrAvatar from './LoginOrAvatar'
import './Header.css'

class Header extends React.Component {

  componentDidMount(){

  }

  logoRender(){
    return(
      <NavLink to="/" className='header-logo'>
        <img alt="logo" src="https://i.ya-webdesign.com/images/pepe-face-png-3.png"/>
      </NavLink>
    )
  }
  
  loginRender(){
    return (
      <div className='header-login'>
        <LoginOrAvatar/>
      </div>
    )
  }

  hello(){
    fetch("http://192.168.1.34/user",{
      method: "POST",
      headers: {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({kek: "1"})
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
    })
  }

  main=()=>{
    return (
      <div className="header">
        {this.logoRender()}
        {this.loginRender()}
      </div>
    )
  }

  render(){
    return this.main()
  }
}

const mapStateToProps = e => {
  return {
		store: e.store
  }
}

export default connect(mapStateToProps)(Header);
