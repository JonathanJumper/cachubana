import React from 'react';
import OrderListElementId from './OrderListElementId'
import OrderListElementUser from './OrderListElementUser'
import OrderListElementSlot from './OrderListElementSlot'
import OrderListElementRegion from './OrderListElementRegion'
import OrderListElementRoute from './OrderListElementRoute'
import OrderListElementProducts from './OrderListElementProducts'

export default function({order}) {
  return (
    <div className="OrderListElement">
      <OrderListElementId id={order._id}/>
      <OrderListElementUser user={order.user}/>
      <OrderListElementSlot slot={order.slot}/>
      <OrderListElementRoute route={order.routeId}/>
      <OrderListElementRegion region={order.region_code}/>
      <OrderListElementProducts count={order.products.length}/>
    </div>
  )
}