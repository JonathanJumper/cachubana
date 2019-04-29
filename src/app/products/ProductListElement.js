import React from 'react';
import { withRouter } from "react-router-dom";

import ProductListElementId from './ProductListElementId'
import ProductListElementName from './ProductListElementName'
import ProductListElementSwitch from './ProductListElementSwitch'
import ProductListElementPrice from './ProductListElementPrice'
import ProductListElementTotal from './ProductListElementTotal'

function ProductListElement(props) {

  const {product, orderId} = props;

  return (
    <div className="ProductListElement">
      <ProductListElementId id={product._id}/>
      <ProductListElementName name={product.name}/>
      <ProductListElementSwitch ready={product.ready} orderId={orderId} productId={product._id} />
      <ProductListElementPrice price={product.price} quantity={product.quantity}/>
      <ProductListElementTotal total={product.total}/>

    </div>
  )
}

export default withRouter(ProductListElement)