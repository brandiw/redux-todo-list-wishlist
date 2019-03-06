const initialState = [
  'Bananas',
  'Frozen Pizza',
  'Flamin\' Hot Cheetos',
  'Chocolate Milk',
  'Oranges',
  'Turkey',
  'Ground Beef',
  'Gatorade',
  'Granola Bars',
  'Yogurt'
]

export default (state = initialState, action) => {
  switch(action.type){
    case 'STOCK_ITEM':
      return [...state, action.item]
    default:
      return state
  }
}
