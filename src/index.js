import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './redux/reducers';
import * as serviceWorker from './serviceWorker';

import App from './App';

const reduxStore = createStore(allReducers)

class Index extends Component {
    render() {
      return (
        <Provider store={reduxStore}>
          <App/>
        </Provider>
      )
    }
  }

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
