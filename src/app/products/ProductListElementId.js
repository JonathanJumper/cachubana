import React from 'react';
import key from '../../assets/key.svg'

export default function({id}) {
  return (
    <div className='list-element'>
      <img src={key} alt="key" className='icon' />
      <span className='ml1'> {id} </span>
    </div>
  )
}