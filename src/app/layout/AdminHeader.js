import React from 'react';
import routeIcon from '../../assets/route.svg';
import areaIcon from '../../assets/area.svg';
import arrowUp from '../../assets/arrow_down.svg';
import arrowDown from '../../assets/arrow_up.svg';
import product from '../../assets/product.svg';
import route from '../../assets/route.svg';
import clock from '../../assets/clock.svg';
import { Link, withRouter } from "react-router-dom";
import {connect} from "react-redux";

function Header(props) {
  const {count, location} = props;

  function isCurrent(name){
    return location.pathname.includes(name)
  }

  return (
    <div className='AdminHeader-container'>

      <div className='left'>
        <div className='list-element my1 mr3'>
          <img src={routeIcon} alt="route" className='icon' />
          <input className='ml1 large'/>
        </div>

        <div className='list-element my1 mr3'>
          <img src={areaIcon} alt="area" className='icon' />
          <input className='ml1'/>
        </div>

        <div className='list-element my1 mr3 clickable'>
          <img src={arrowUp} alt="arrow-up" className='icon' />
          <span className='ml1'>%</span>
          <img src={product} alt="product" className='icon' />
        </div>

        <div className='list-element my1 mr3 clickable'>
          <img src={arrowUp} alt="arrow-up" className='icon' />
          <img src={route} alt="route" className='icon ml1' />
        </div>

        <div className='list-element my1 mr3 clickable'>
          <img src={arrowDown} alt="arrow-up" className='icon' />
          <img src={clock} alt="clock" className='icon ml1' />
        </div>
      </div>

      <div className='right'>
        %
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  count: state.orders.length
});

export default withRouter(connect(mapStateToProps)(Header))
