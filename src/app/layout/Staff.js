import React from 'react';
import { Route } from "react-router-dom";
import OrdersList from '../orders/OrderListStaff';
import Order from '../orders/Order';

export default function() {
  return (
    <div>
      <Route path="/staff/orders" exact component={OrdersList} />
      <Route path="/staff/orders/:id" exact component={Order} />
    </div>
  )
}