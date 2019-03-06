export const addToCart = (item) => {
  // This is an ACTION
  return {
    type: 'ADD_ITEM', // type is required
    item
  }
}
