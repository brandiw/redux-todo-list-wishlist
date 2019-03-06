export default (state = {}, action) => {
  switch(action.type){
    case 'ADD_ITEM':
      let newState = {...state}
      if(newState[action.item]){
        newState[action.item] += 1
      }
      else {
        newState[action.item] = 1
      }
      return newState
    default:
      return state
  }
}
