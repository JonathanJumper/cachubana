import produce from "immer"

export default (state = [], action) => {
  return produce(state, draft => {

    // manipulate draft, not state
    // it will produce the next immutable state by mutating the current one
    switch (action.type) {

      case '@@ORDERS/ADD_ORDER': {

        draft.push({
          ...action.payload.order,
          products: action.payload.order.products.map(product => (
            {
              ...product,
              ready: false
            }
          )),
          productsMeta: {
            totalCount: action.payload.order.products.length,
            readyCount: 0
          }
        });

        break;
      }

      case '@@ORDERS/TOGGLE_PRODUCT_READINESS': {

        const order = draft.find(order => order._id === action.orderId);
        const product = order.products.find(product => product._id === action.productId);
        product.ready = action.flag;

        if(action.flag)
          order.productsMeta.readyCount++;
        else
          order.productsMeta.readyCount--;

        break;

      }

      default:
        break;
    }

  })
}