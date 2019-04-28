import React from 'react';
import userIcon from '../../assets/user.svg'

export default function({user}) {
  return (
    <div className='OrderListElement-element'>
      <img src={userIcon} alt="user" className='OrderListElement-icon' />
      <span style={{marginLeft: '10px'}}> {user.name} </span>
    </div>
  )
}