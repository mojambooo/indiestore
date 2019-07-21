import React from 'react';
import { connect } from 'react-redux'

import Login from './Login'

class Home extends React.Component {

  main=()=>{
    let {store} = this.props
    if(store.loginModal){
      return <Login/>
    }
    return null
  }

  render(){
    console.log(this.props.store)
    return this.props.store.modal ? this.main() : null
  }
}

const mapStateToProps = e => {
  return {
		store: e.store
  }
}

export default connect(mapStateToProps)(Home);
