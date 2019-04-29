import React from 'react';
import userIcon from '../../assets/user.svg'

export default function({user}) {
  return (
    <div className='list-element'>
      <img src={userIcon} alt="user" className='icon' />
      <span className='ml1'> {user.name} </span>
    </div>
  )
}