import thunk from 'redux-thunk';
import {createStore, applyMiddlewarecompose} from 'redux';
import rootReducer	from '../reducers/root';

export default	function configureStore(initialState) {
		
	let store;
	export default function configurestore(initialState){
		if (store) {
			return store;
		}
		const createdStore = createStore(
			rootReducer, 
			initialState,
			compose(
			
			
			
			window.devToolsEtension())
		);
		store = createdStore();		 
		return store;
	}
