import React from 'react';
import { connect } from 'react-redux';
import OrderListElement from './OrderListElement'

function OrderList(props) {
  return (
    <div className="OrderList-container">
      {
        props.orders.map(order => (
          <OrderListElement key={order._id} order={order} />
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps)(OrderList);