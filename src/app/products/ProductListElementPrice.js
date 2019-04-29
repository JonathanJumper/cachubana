import React from 'react';

export default function({price, quantity}) {
  return (
    <div className='OrderListElement-element'>
      $ {price} x {quantity}
    </div>
  )
}