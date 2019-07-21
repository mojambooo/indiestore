import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
    this.users = [
      {name: "John", login: "mojambo", pass: "kek"},
      {name: "George", login: "vataku", pass: "lol"},
      {name: "Hannah", login: "seitokai", pass: "arbidol"},
    ]
  }

  componentDidMount(){
    
  }

  main(){
    return (
      <div className="login">
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