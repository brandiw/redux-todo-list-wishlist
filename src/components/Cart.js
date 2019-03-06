import React, { Component } from 'react'
import { connect } from 'react-redux'
// Maybe we would use this later - like if we wanted to delete an item from here,
// but currently we are not using any actions so no need to include it!
// import * as CartActions from '../actions/CartActions'

class Cart extends Component {
  render(){
    const cartItems = Object.keys(this.props.cart).map((item, i) => {
      return (
          <li key={i}>
            {item} ({this.props.cart[item]})
          </li>
        )
    })
    return(
        <div>
          <h2>My Cart</h2>
          <ul>
            {cartItems}
          </ul>
        </div>
      )
  }
}

function mapStateToProps(state, props){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
