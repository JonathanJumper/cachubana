import React from 'react';
import { connect } from 'react-redux';
import {SORT} from '../../CONSTANTS'
import {productComparator, routeComparator, slotComparator} from '../../utils'
import OrderListElement from './OrderListElement'
import {setAdminMeta} from '../../actions/utilsActions'

class OrderListAdmin extends React.Component {

  // because componentWillReceiveProps is being deprecated
  static getDerivedStateFromProps(props, state) {
    const totalCount = props.orders.length;
    const readyCount = props.orders.filter(order => order.productsMeta.readyCount === order.productsMeta.totalCount).length;
    props.setAdminMeta(totalCount, readyCount);
  }

  render() {
    return (
      <div className="OrderList-container">
        {
          this.props.orders.map(order => (
            <OrderListElement key={order._id} order={order} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {

  const query = state.utils.query;
  // create new array
  let orders = state.orders.slice();
  if (query.route)
    orders = orders.filter(order => order.routeId.includes(query.route));
  if (query.region)
    orders = orders.filter(order => order.region_code.includes(query.region));

  const sort = state.utils.sort;
  if(sort.type === SORT.TYPES.PRODUCTS){
    orders.sort((oA, oB) => productComparator(oA, oB, sort.order));
  }
  else if (sort.type === SORT.TYPES.ROUTE){
    orders.sort((oA, oB) => routeComparator(oA, oB, sort.order));
  }
  else if (sort.type === SORT.TYPES.SLOT){
    orders.sort((oA, oB) => slotComparator(oA, oB, sort.order));
  }

  return {
    orders,
  }
};

export default connect(mapStateToProps, {setAdminMeta})(OrderListAdmin);