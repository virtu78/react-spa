import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
  
} from './types';

import axios from 'axios';

	export const addTodo = () => {
		return (dispatch, getState) => {
			dispatch(addTodoStarted());
			console.log('current state:', getState());
			
			
			axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Friz')
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
