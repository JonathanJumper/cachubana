import React from 'react';
import ProductListElement from './ProductListElement'

function ProductList({order}) {
  return (
    <div>
      {
        order.products.map(product => (
          <ProductListElement key={product._id} product={product} orderId={order._id} />
        ))
      }
    </div>
  )
}

export default (ProductList);