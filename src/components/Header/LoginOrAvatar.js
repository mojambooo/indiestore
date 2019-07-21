import React from 'react'
import { connect } from 'react-redux'
import { openLogin } from '../../redux/actions/store'

class LoginOrAvatar extends React.Component{

  loginButton(){
    return(
      <div onClick={()=>this.props.openLogin()}>Войти</div>
    )
  }

  userAvatar(){
    return(
      <div>user</div>
    )
  }

  render(){
    return this.props.userInfo ? this.loginButton() : this.userAvatar()
  }
}

const mapStateToProps = e => {
  return {
    userInfo: e.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openLogin: () => dispatch(openLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrAvatar);