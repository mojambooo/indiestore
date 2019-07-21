import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
  }

  main(){
    return (
      <div className="login modal">
        LOGIN
      </div>
    )
  }

  render(){
    return this.main()
  }
}

const mapStateToProps = e =>{
  return {
    store: e.store
  }
}

export default connect(mapStateToProps)(Login)