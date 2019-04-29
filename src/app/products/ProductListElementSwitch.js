import React from 'react';
import {connect} from "react-redux";
import {toggleProductReadiness} from '../../actions/orderActions'
import switch_off from '../../assets/switch_off.svg'
import switch_on from '../../assets/switch_on.svg'

function ProductListElementSwitch(props) {

  const {orderId, productId, ready} = props;

  function handleClick() {
    props.toggleProductReadiness(orderId, productId, !ready);
  }

  return (
    <div className='ProductListElementSwitch'>
      { ready ?
        <img src={switch_on} alt="switch_on" className='switch' onClick={handleClick} />
        :
        <img src={switch_off} alt="switch_off" className='switch' onClick={handleClick} />
      }
    </div>
  )

}
export default connect(null, {toggleProductReadiness})(ProductListElementSwitch)