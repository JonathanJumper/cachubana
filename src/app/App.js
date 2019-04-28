import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import OrdersList from './orders/OrderList';
import logo from '../assets/logo.svg';

import './app.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App-container'>

          <header>
            <img src={logo} alt="Logo" />
          </header>

          <div className='App-subcontainer'>
            <OrdersList />
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;
