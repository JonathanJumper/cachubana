import React from 'react';
import clock from '../../assets/clock.svg'

export default function({slot}) {
  return (
    <div className='list-element'>
      <img src={clock} alt="clock" className='icon' />
      <span className='ml1'> {slot} </span>
    </div>
  )
}