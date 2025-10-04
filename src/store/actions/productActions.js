//Kategorileri ayarlama
export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  payload: categories,
});

//Ürün listesini ayarlama
export const setProductList = (products) => ({
  type: 'SET_PRODUCT_LIST',
  payload: products,
});

//Detay sayfası için seçilen ürünü ayarlama
export const setSelectedProduct = (product) => ({
  type: 'SET_SELECTED_PRODUCT',
  payload: product,
});

//Toplam ürün sayısını ayarlama
export const setTotal = (total) => ({
  type: 'SET_TOTAL',
  payload: total,
});

//Yükleme durumunu ayarlama ("NOT_FETCHED", "FETCHING", "FETCHED", "FAILED")
export const setFetchState = (state) => ({
  type: 'SET_FETCH_STATE',
  payload: state,
});

//Sayfalama limitini ayarlama
export const setLimit = (limit) => ({
  type: 'SET_LIMIT',
  payload: limit,
});

//Sayfalama offset'ini ayarlama
export const setOffset = (offset) => ({
  type: 'SET_OFFSET',
  payload: offset,
});

//Filtreleme metnini ayarlama
export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});

