import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import Header from './layout/Header'
import Staff from './layout/Staff'
import Admin from './layout/Admin'

import store from '../store';


import './app.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>

          <div className='App-container'>

            <Header/>

            <div className='App-subcontainer'>

              <Route path="/admin" component={Admin} />

              <Route path="/staff" component={Staff} />

            </div>

          </div>

        </Router>
      </Provider>
    );
  }
}

export default App;
