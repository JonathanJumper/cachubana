import React from 'react';
import product from '../../assets/product.svg'

export default function({name}) {
  return (
    <div className='list-element'>
      <img src={product} alt="product" className='icon' />
      <span className='ml1'> {name} </span>
    </div>
  )
}