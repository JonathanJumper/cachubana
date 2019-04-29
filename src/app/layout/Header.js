import React from 'react';
import logo from '../../assets/logo.svg';
import { Link, withRouter } from "react-router-dom";
import {connect} from "react-redux";

function Header(props) {
  const {count, location} = props;

  function isCurrent(name){
    return location.pathname.includes(name)
  }

  return (
    <header>

      <div className='left'>
        <img src={logo} alt="Logo" />
        <Link to='/admin/orders' className={ isCurrent("admin") ? 'current' : '' }>
          ADMIN
        </Link>
        <Link to='/staff/orders' className={ isCurrent("staff") ? 'current' : '' }>
          STAFF
        </Link>
      </div>

      <div className='right'>
        {count} ORDENES
      </div>

    </header>
  )
}

const mapStateToProps = state => ({
  count: state.orders.length
});

export default withRouter(connect(mapStateToProps)(Header))
