import { combineReducers } from 'redux'
import cart from './CartReducer'
import shelf from './ShelfReducer'

const rootReducer = combineReducers({
  cart, // shorthand for cart: cart
  shelf
})

export default rootReducer;
