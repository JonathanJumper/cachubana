import React from 'react';
import { connect } from 'react-redux';

function OrderList(props) {
  return (
    <div className="OrderList-container">
      {
        props.orders.map(order => (
          <div key={order._id} className="OrderList-element">
            {order._id}
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps)(OrderList);