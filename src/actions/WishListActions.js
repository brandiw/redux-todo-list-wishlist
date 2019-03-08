export const addToWishes = (item) => {
  return {
    type: 'ADD_WISH',
    item
  }
}

export const removeFromWishes = (item) => {
  return {
    type: 'REMOVE_WISH',
    item
  }
}
