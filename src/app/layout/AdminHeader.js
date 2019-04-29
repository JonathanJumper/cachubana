import React from 'react';
import routeIcon from '../../assets/route.svg';
import areaIcon from '../../assets/area.svg';
import arrowUp from '../../assets/arrow_down.svg';
import arrowDown from '../../assets/arrow_up.svg';
import product from '../../assets/product.svg';
import route from '../../assets/route.svg';
import clock from '../../assets/clock.svg';
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {SORT} from '../../CONSTANTS'

import {setQueryRegion, setQueryRoute, setSort} from '../../actions/utilsActions'

function Header(props) {

  const {adminMeta, query, sort} = props;

  const handleKeyPress = (name) => (event) => {
    if (event.key === 'Enter') {
      if(name === 'route'){
        props.setQueryRoute(event.target.value)
      }
      else if(name === 'region'){
        props.setQueryRegion(event.target.value)
      }
    }
  };

  const handleSortClick = (name) => event => {
    props.setSort(name)
  };

  function renderArrow(name){
    if(sort.type === name){
      if(sort.order === SORT.ORDER.ASC)
        return <img src={arrowUp} alt="arrow-up" className='icon' />
      else
        return <img src={arrowDown} alt="arrow-down" className='icon' />
    }
  }

  return (
    <div className='AdminHeader-container'>

      <div className='left'>
        <div className='list-element my1 mr3'>
          <img src={routeIcon} alt="route" className='icon' />
          <input defaultValue={query.route ? query.route : '' } className='ml1 large' onKeyPress={handleKeyPress('route')}/>
        </div>

        <div className='list-element my1 mr3'>
          <img src={areaIcon} alt="area" className='icon' />
          <input defaultValue={query.region ? query.region : '' } className='ml1' onKeyPress={handleKeyPress('region')}/>
        </div>

        <div className='list-element my1 mr3 clickable' onClick={handleSortClick(SORT.TYPES.PRODUCTS)}>
          {renderArrow(SORT.TYPES.PRODUCTS)}
          <span className='ml1'>%</span>
          <img src={product} alt="product" className='icon' />
        </div>

        <div className='list-element my1 mr3 clickable' onClick={handleSortClick(SORT.TYPES.ROUTE)}>
          {renderArrow(SORT.TYPES.ROUTE)}
          <img src={route} alt="route" className='icon ml1' />
        </div>

        <div className='list-element my1 mr3 clickable' onClick={handleSortClick(SORT.TYPES.SLOT)}>
          {renderArrow(SORT.TYPES.SLOT)}
          <img src={clock} alt="clock" className='icon ml1' />
        </div>
      </div>

      <div className='right'>
        {adminMeta.totalCount+" ORDENES"} {(adminMeta.readyCount * 100 / adminMeta.totalCount).toFixed(0)}% LISTO
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  query: state.utils.query,
  sort: state.utils.sort,
  adminMeta: state.utils.adminMeta
});

export default withRouter(connect(mapStateToProps, {setQueryRegion, setQueryRoute, setSort})(Header))
