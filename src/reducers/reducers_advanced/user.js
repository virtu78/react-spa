import cookies from 'js-cookie';
import initialState from '../constants/initialState';
import * as types from '../constants/types';

export function pagination(state = initialState.posts, action){
switch(action.type){
	case types.auth.LOGIN_SUCCESS:
	const {user, token} = action;
	Cookies.set('spa-react-token', token);
	return Object.assign({}, state.user, {
		authentificated: true,
		name: user.name,
		id: user.id,
		profilePicture: user.profilePicture ||
		'/static/assets/users.4.jpeg', 
		token
	});
	case.types.auth.LOGOUT_SUCESS:
	Cookies.remove('spa-react-token');
	return initialState.user;
	default:
	return state;

	}
}
