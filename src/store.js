import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import orderReducer from './reducers/orderReducer'
import logger from 'redux-logger';
import data from './data/orders'

// chrome dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    orders: orderReducer,
  }),
  composeEnhancers(
    applyMiddleware(logger)
  )
);

/* mock of realtime action */
let timerId = null;
let index = 0;

function getRandom(min = 1, max = 10) {
  let result = Math.random();
  result = result * (max - min + 1) + min;
  result = Math.floor(result);
  return result * 1;
}

function startEvent(delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    store.dispatch({
      type: '@@ORDERS/ADD_ORDER',
      payload: {
        order: data[index]
      }
    });
    if (index < (data.length - 1)) {
      index += 1;
      return startEvent(getRandom());
    }
    return
  }, delay)
}

startEvent(getRandom());

export default store;