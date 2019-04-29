import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import back from '../../assets/left-arrow.svg'

import OrderListElement from './OrderListElement';
import ProductList from '../products/ProductList';

function Order(props) {

  const {order} = props;

  function handleBack(){
    props.history.push('/staff/orders/');
  }

  return (
    <div className='Order-container'>

      <div onClick={handleBack} >
        <img src={back} alt="back" className='icon-button' />
      </div>

      { order &&
        <OrderListElement order={order} />
      }

      { order &&
        <ProductList order={order}  />
      }

    </div>
  )
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    order: state.orders.find(order => order._id === id)
  }
};

export default withRouter(connect(mapStateToProps)(Order))