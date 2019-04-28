import React from 'react';
import { connect } from 'react-redux';

function Admin(props) {
  return (
    <div>
      <div className='Admin-header'>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps)(Admin);