import React from 'react';
import { connect } from 'react-redux'

import { modalClose } from '../redux/actions/modal'
import Login from './Login'

class Home extends React.Component {

  innerBox=()=>{
    let {modal} = this.props
    if(modal.login){
      return <Login/>
    }
    return null
  }

  main=()=>{
    return(
      <div className="modal">
        <div className="modal-close" onClick={()=>this.props.modalClose()}></div>
        <div className="modal-box">{this.innerBox()}</div>
      </div>
    )
  }

  render(){
    return this.props.modal.open ? this.main() : null
  }
}

const mapStateToProps = e => {
  return {
		modal: e.modal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    modalClose: () => dispatch(modalClose())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
