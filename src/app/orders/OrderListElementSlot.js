import React from 'react';
import clock from '../../assets/clock.svg'

export default function({slot}) {
  return (
    <div className='OrderListElement-element'>
      <img src={clock} alt="clock" className='OrderListElement-icon' />
      <span style={{marginLeft: '10px'}}> {slot} </span>
    </div>
  )
}