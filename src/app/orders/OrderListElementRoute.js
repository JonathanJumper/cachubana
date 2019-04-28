import React from 'react';
import routeIcon from '../../assets/route.svg'

export default function({route}) {
  return (
    <div className='OrderListElement-element'>
      <img src={routeIcon} alt="route" className='OrderListElement-icon' />
      <span style={{marginLeft: '10px'}}> {route} </span>
    </div>
  )
}