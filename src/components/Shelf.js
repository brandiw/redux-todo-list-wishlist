import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ShelfActions from '../actions/ShelfActions'
import * as CartActions from '../actions/CartActions'

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

// Define and dispatch any actions we need to have performed
// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(ShelfActions, dispatch)
//   }
// }

export default connect(mapStateToProps, {
  addToShelf: ShelfActions.addToShelf,
  addToCart: CartActions.addToCart
})(Shelf)
