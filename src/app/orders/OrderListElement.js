import React from 'react';
import { withRouter } from "react-router-dom";

import OrderListElementId from './OrderListElementId'
import OrderListElementUser from './OrderListElementUser'
import OrderListElementSlot from './OrderListElementSlot'
import OrderListElementRegion from './OrderListElementRegion'
import OrderListElementRoute from './OrderListElementRoute'
import OrderListElementProducts from './OrderListElementProducts'

function OrderListElement(props) {

  const {order} = props;
  const orderReady = order.productsMeta.readyCount === order.productsMeta.totalCount;

  function handleClick(){
    props.history.push('/staff/orders/'+order._id);
  }

  return (
    <div className={ orderReady ? "OrderListElement ready" : "OrderListElement" }  onClick={handleClick}>
      <OrderListElementId id={order._id}/>
      <OrderListElementUser user={order.user}/>
      <OrderListElementSlot slot={order.slot}/>
      <OrderListElementRoute route={order.routeId}/>
      <OrderListElementRegion region={order.region_code}/>
      <OrderListElementProducts meta={order.productsMeta}/>
    </div>
  )
}

export default withRouter(OrderListElement)