import React from 'react';

export default function({region}) {
  return (
    <div className='OrderListElement-element'>
      <span> Reg: </span>
      <span style={{marginLeft: '10px'}}> {region} </span>
    </div>
  )
}