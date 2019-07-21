import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'

import {getDeviceInfo} from './redux/actions/store'

import Header from './components/Header/Header'
import Modal from './components/Modal'
import Home from './pages/Home/Home'
import Kek from './pages/Kek/Kek'
import NoMatch from './components/NoMatch'

import './App.css';

class App extends Component {
  componentWillMount(){
    this.props.getDeviceInfo()
  }

  render(){
    let modal
    if(this.props.store.modal){
      modal = {display: "none"}
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
		store: e.store
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getDeviceInfo: () => dispatch(getDeviceInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
