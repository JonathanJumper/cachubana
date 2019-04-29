import React from 'react';

export default function({price, quantity}) {
  return (
    <div className='list-element'>
      $ {price} x {quantity}
    </div>
  )
}