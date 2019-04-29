import React from 'react';
import { Route } from "react-router-dom";
import AdminHeader from './AdminHeader';
import OrdersList from '../orders/OrderListAdmin';
import Order from '../orders/Order';

export default function() {
  return (
    <div>

      <AdminHeader />

      <Route path="/admin/orders" exact component={OrdersList} />
      <Route path="/admin/orders/:id" exact component={Order} />

    </div>
  )
}