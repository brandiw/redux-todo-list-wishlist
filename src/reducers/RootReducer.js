import { combineReducers } from 'redux'
import cart from './CartReducer'
import shelf from './ShelfReducer'
import wishes from './WishListReducer'

const rootReducer = combineReducers({
  cart, // shorthand for cart: cart
  shelf,
  wishes
})

export default rootReducer;
