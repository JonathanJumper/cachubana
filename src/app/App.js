import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import OrdersList from './orders/OrderList';

import './app.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <OrdersList />
        </div>
      </Provider>
    );
  }
}

export default App;
