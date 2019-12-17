import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  FETCH_TODO_STARTED,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_STARTED

  
  
} from '../actions/types';

const initialState = {
  loading: false,
  todo: [],
  error: null
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todo: [...state.todo, action.payload]
        
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
      case DELETE_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
      case DELETE_TODO_SUCCESS:
      return state.filter(todo => todo._id !== action.payload.id);
      case DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
      case FETCH_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
      case FETCH_TODO_SUCCESS:
      return action.todo;
      case FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
