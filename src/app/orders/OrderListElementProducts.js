import React from 'react';
import product from '../../assets/product.svg'

export default function({meta}) {
  return (
    <div className='OrderListElement-element'>
      <img src={product} alt="product" className='OrderListElement-icon' />
      <span style={{marginLeft: '10px'}}> {meta.totalCount} - {(meta.readyCount * 100 / meta.totalCount).toFixed(2)}% Listo </span>
    </div>
  )
}