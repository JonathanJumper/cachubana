import {SORT} from './CONSTANTS'

export function productComparator(oA, oB, order){
  if(order === SORT.ORDER.ASC)
    return oA.productsMeta.readyCount / oA.productsMeta.totalCount - oB.productsMeta.readyCount / oB.productsMeta.totalCount;
  else
    return -1*(oA.productsMeta.readyCount / oA.productsMeta.totalCount - oB.productsMeta.readyCount / oB.productsMeta.totalCount);
}

export function routeComparator(oA, oB, order){
  const multiplier = order === SORT.ORDER.ASC ? 1 : -1;
  if (oA.routeId < oB.routeId) {
    return -1 * multiplier;
  }
  if (oA.routeId > oB.routeId) {
    return 1 * multiplier;
  }
  return 0;
}

export function slotComparator(oA, oB, order) {
  const multiplier = order === SORT.ORDER.ASC ? 1 : -1;
  if (oA.slot < oB.slot) {
    return -1 * multiplier;
  }
  if (oA.slot > oB.slot) {
    return 1 * multiplier;
  }
  return 0;
}