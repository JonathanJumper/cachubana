export const toggleProductReadiness = (orderId, productId, flag) =>  {
  return {
      type: '@@ORDERS/TOGGLE_PRODUCT_READINESS',
      orderId: orderId,
      productId: productId,
      flag: flag,
    }
};