import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ShelfActions from '../actions/ShelfActions'
import * as CartActions from '../actions/CartActions'
import * as WishListActions from '../actions/WishListActions'

class Shelf extends Component {
  constructor(props){
    super(props)
    this.state = {
      newStockItem: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToShelf(this.state.newStockItem)
    this.setState({ newStockItem: '' })
  }

  render(){
    const shelfItems = this.props.shelf.map((item, i) => {
      return (
          <li key={i}>
            <button onClick={() => { this.props.addToCart(item) }}>+</button>
            <button onClick={() => { this.props.addToWishes(item) }}>♥</button>
            {item}
          </li>
        )
    })
    return(
        <div>
          <h2>Store Inventory</h2>
          <ul>
            {shelfItems}
          </ul>
          <hr />
          <h2>Add Stock</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.newStockItem}
              onChange={(e) => { this.setState({ newStockItem: e.target.value }) }}
            />
            <input type="submit" value="Add" />
          </form>
        </div>
      )
  }
}

// Take the state that we get from the store
// and put it into our component's props
function mapStateToProps(state, props){
  return {
    shelf: state.shelf
  }
}

export default connect(mapStateToProps, {
  addToShelf: ShelfActions.addToShelf,
  addToCart: CartActions.addToCart,
  addToWishes: WishListActions.addToWishes
})(Shelf)
