export const setQueryRoute = (route) =>  (
  {
    type: '@@QUERY/SET_ROUTE',
    route: route
  }
);

export const setQueryRegion = (region) =>  (
  {
    type: '@@QUERY/SET_REGION',
    region: region
  }
);

export const setAdminMeta = (totalCount, readyCount) => (
  {
    type: '@@UTILS/SET_ADMIN_META',
    totalCount,
    readyCount
  }
);

export const setSort = (name) => (
  {
    type: '@@SORT/SET_SORT',
    name
  }
);