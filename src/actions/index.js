import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  FETCH_TODO_STARTED,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_STARTED,
 
  
  
} from './types';

import axios from 'axios';
const addTodoSuccess = todo => ({
	type: ADD_TODO_SUCCESS,
	payload: {
	  ...todo
	}
  });
  
  const addTodoStarted = () => ({
	type: ADD_TODO_STARTED
  });
  
  const addTodoFailure = error => ({
	type: ADD_TODO_FAILURE,
	payload: {
	  error
	}
  });
	export const addTodo = () => {
		return (dispatch, getState) => {
			dispatch(addTodoStarted());
			console.log('current state:', getState());			
			axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Friz')
			.then(result => {
				setTimeout(() => {
					//throw new Error('NOT!');
					dispatch(addTodoSuccess(result.data.message.tasks));
				}, 2500);
				}).catch(e => {        
				dispatch(addTodoFailure('error'));
			});
		};
	};
	export const deleteTodoSuccess = id => {
		return {
		  type: DELETE_TODO_SUCCESS,
		  payload: {
			id
		  }
		}
	  }
	  const deleteTodoStarted = () => ({
		type: DELETE_TODO_STARTED
	  });
	  
	  const deleteTodoFailure = error => ({
		type: DELETE_TODO_FAILURE,
		payload: {
		  error
		}
	  });

const apiUrl = 'https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Friz'
  export const deleteTodo = id => {
	return (dispatch, getState) => {
		dispatch(deleteTodoStarted());
		console.log('current state:', getState());
	  return axios.get(`${apiUrl}/delete/${id}`)
		.then(result => {
		  dispatch(deleteTodoSuccess(result.data.message.tasks))
		})
		.catch(e => {        
			dispatch(deleteTodoFailure('error'));
		});
	};
  };
  export const fetchTodosSuccess = (todo) => {
	return {
	  type: FETCH_TODO_SUCCESS,
	  todo
	}
  };
  const fetchTodoStarted = () => ({
	type: FETCH_TODO_STARTED
  });
  
  const fetchTodoFailure = error => ({
	type: FETCH_TODO_FAILURE,
	payload: {
	  error
	}
  });
 

  export const fetchAllTodos = () => {
	
	return (dispatch, getState) => {
		dispatch(fetchTodoStarted());
		console.log('current state:', getState());
  return axios.get(apiUrl)
	.then(result => {
	  dispatch(fetchTodosSuccess(result.data.message.tasks))
	})
	.catch(e => {        
		dispatch(fetchTodoFailure('error'));
	});
};
};
 