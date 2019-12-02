import { combineReducers } from 'redux'
import {
  
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions'

function postsByMess(state = {}, action) {
  switch (action.type) {
   
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.mess]: posts(state[action.mess], action)
      })
    default:
      return state
  }
}


function posts(
  state = {
    isFetching: false,
    
    items: []
  },
  action
) {
  switch (action.type) {

    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}



const rootReducer = combineReducers({
  postsByMess,
 
})

export default rootReducer
