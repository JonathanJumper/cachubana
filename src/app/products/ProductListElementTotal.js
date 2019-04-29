import React from 'react';

export default function({total}) {
  return (
    <div className='OrderListElement-element'>
      Total:
      <span style={{marginLeft: '10px'}}> $ {total} </span>
    </div>
  )
}