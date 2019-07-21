import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'

import {getDeviceInfo} from './redux/actions/store'

import Header from './components/Header/Header'
import Modal from './components/Modal'
import Home from './pages/Home/Home'
import Kek from './pages/Kek/Kek'
import NoMatch from './components/NoMatch'

import './styles/App.css';
import './styles/animations.css';

class App extends Component {
  componentWillMount(){
    this.props.getDeviceInfo(this.isMobile())
  }

  isMobile = () => {
    let devices = {
      Android: function() { 
        return navigator.userAgent.match(/Android/i); 
      }, 
      iOS: function() { 
        return navigator.userAgent.match(/iPhone/i); 
      },
      IPAD: function() { 
        return navigator.userAgent.match(/iPad/i); 
      },
      any: function() { 
        return (devices.Android() || devices.BlackBerry() || devices.iOS() || devices.Opera() || devices.Windows()); 
      }
    };
    if(devices.iOS() || devices.Android())  {
      return true
    } else return false
  }

  render(){
    let modal
    console.log(this.props.store)
    if(this.props.store.mobile){
      if(this.props.modal.open){
        modal = {display: "none"}
      }
    }

    return (
      <Router>
        <div className="App">
          <Header/>
          <Modal/>
          <div style={modal}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/kek" component={Kek}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = e => {
  return {
    modal: e.modal,
    store: e.store
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getDeviceInfo: (e) => dispatch(getDeviceInfo(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
