import React from 'react';
import area from '../../assets/area.svg'

export default function({region}) {
  return (
    <div className='list-element'>
      <img src={area} alt="area" className='icon' />
      <span className='ml1'> {region} </span>
    </div>
  )
}