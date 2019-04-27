import produce from "immer"

export default (state = [], action) => {
  return produce(state, draft => {

    // manipulate draft, not state
    // it will produce the next immutable state by mutating the current one
    switch (action.type) {

      case '@@ORDERS/ADD_ORDER':
        draft.push(action.payload.order);
        break;

      default:
        break;
    }

  })
}