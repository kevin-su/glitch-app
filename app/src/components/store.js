import { createStore } from 'redux'

import {
  addTodo
} from './actions'

import todoApp from './reducers'

// import { combineReducers } from 'redux'

const store = createStore(todoApp);

// store.dispatch(addTodo('new text'));

// import {
//   addTodo
// } from './actions'

// Log the initial state
// console.log(store.getState())