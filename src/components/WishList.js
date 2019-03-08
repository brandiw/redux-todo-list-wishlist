import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as WishListActions from '../actions/WishListActions'

class WishList extends Component {
  render() {
    const wishListItems = Object.keys(this.props.wishes).map((item, i) => {
      return (
          <li key={i}>
            <button onClick={() => { this.props.removeFromWishes(item) } }>
              X
            </button>
            {item} ({this.props.wishes[item]})
          </li>
        )
    })
    return (
        <div>
          <h2>♥ My Wish List ♥</h2>
          <ul>
            {wishListItems}
          </ul>
        </div>
      )
  }
}

function mapStateToProps(state){
  return {
    wishes: state.wishes
  }
}

export default connect(mapStateToProps, WishListActions)(WishList)
