import React from 'react';
import key from '../../assets/key.svg'

export default function({id}) {
  return (
    <div className='OrderListElement-element'>
      <img src={key} alt="key" className='OrderListElement-icon' />
      <span style={{marginLeft: '10px'}}> {id} </span>
    </div>
  )
}