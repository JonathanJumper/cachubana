import produce from "immer"
import {SORT} from '../CONSTANTS'
const initState = {

  query: {
    route: '',
    region: '',
  },

  sort: {
    type: SORT.TYPES.PRODUCTS,
    order: SORT.ORDER.ASC,
  },

  adminMeta: {
    totalCount: 0,
    readyCount: 0
  }

};

export default (state = initState, action) => {
  return produce(state, draft => {

    // manipulate draft, not state
    // it will produce the next immutable state by mutating the current one
    switch (action.type) {

      case '@@QUERY/SET_ROUTE': {
        draft.query.route = action.route;
        break;
      }

      case '@@QUERY/SET_REGION': {
        draft.query.region = action.region.toUpperCase();
        break;
      }

      case '@@UTILS/SET_ADMIN_META': {
        draft.adminMeta.totalCount = action.totalCount;
        draft.adminMeta.readyCount = action.readyCount;
        break;
      }

      case '@@SORT/SET_SORT': {
        // already sorted by type, change order
        if(draft.sort.type === action.name){
          if(draft.sort.order === SORT.ORDER.ASC)
            draft.sort.order = SORT.ORDER.DESC;
          else
            draft.sort.order = SORT.ORDER.ASC;
        }
        // not sorted by type, change type and order to default asc
        else{
          draft.sort = {
            type: action.name,
            order: SORT.ORDER.ASC
          }
        }
      }

      default:
        break;
    }

  })
}