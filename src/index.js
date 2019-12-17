import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
//import { createLogger } from 'redux-logger'
//import thunkMiddleware from 'redux-thunk'
import {Provider} from "react-redux";
import todosReducer from './reducers/todoReducer';

import { fetchAllTodos } from './actions/index';
//import { selectSubreddit, fetchPosts } from './actions'
import Main from "./Main";

//const loggerMiddleware = createLogger()
/*
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware 
  )
)

store.dispatch(postsBy('tasks'))
store.dispatch(fetchPosts('rtasks')).then(() => console.log(store..getState()))
store.dispatch(fetchPostsIfNeeded('tasks')).then(() => console.log(store.getState()))

ReactDOM.render(
<Provider store={store}>
  
    < Main />
</Provider>,
  document.getElementById('root')
)
 */
 
 
 const store = createStore(todosReducer, applyMiddleware(thunk));

 store.dispatch(fetchAllTodos());

ReactDOM.render(
<Provider store={store}>
  
    < Main />
</Provider>,
  document.getElementById('root')
)
