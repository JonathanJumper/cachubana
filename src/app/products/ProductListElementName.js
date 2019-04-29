import React from 'react';
import product from '../../assets/product.svg'

export default function({name}) {
  return (
    <div className='OrderListElement-element'>
      <img src={product} alt="product" className='OrderListElement-icon' />
      <span style={{marginLeft: '10px'}}> {name} </span>
    </div>
  )
}