import React from 'react';

export default function({total}) {
  return (
    <div className='list-element'>
      Total:
      <span className='ml1'> $ {total} </span>
    </div>
  )
}