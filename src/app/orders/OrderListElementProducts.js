import React from 'react';
import product from '../../assets/product.svg'

export default function({meta}) {
  return (
    <div className='list-element'>
      <img src={product} alt="product" className='icon' />
      <span className='ml1'> {meta.totalCount} - {(meta.readyCount * 100 / meta.totalCount).toFixed(2)}% Listo </span>
    </div>
  )
}