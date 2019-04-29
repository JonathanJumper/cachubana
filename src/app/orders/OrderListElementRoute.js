import React from 'react';
import routeIcon from '../../assets/route.svg'

export default function({route}) {
  return (
    <div className='list-element'>
      <img src={routeIcon} alt="route" className='icon' />
      <span className='ml1'> {route} </span>
    </div>
  )
}