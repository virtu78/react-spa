import * as types from '../constants/types';
import {history} from '../history';
import {createError} from './error';
import {loading, loaded} from './loading';
import {getFirebaseUser, loginWithGithub, logUserOut, getFirebaseToken} from'..backend/auth';

export function loginSucess(user, token){
	return{
		type: types.auth.LOGIN_SUCESS,
		user,
		token
	};
}
export function logoutSucess(){
	return{
		type: types.auth.LOGOUT_SUCESS
	};

export function logout(){
	return dispatch => {
		return logUserout()
		.then(() =>{
			history.push('/login');
			dispatch(logoutSucess());
			window.Raven.setUseContet();
		})
		.catch(err => dispatch(createError(err)));
	};
}
eport function login(){
	return dispatch =>{
		return loginWithGiyhub().then(async()=>{
			try{
				dispatch(loading());
				const user = await getFirebaseUser();
				const token await getFirebaseToken();
				const res = await API.loadUser(user, uid);
				if (res.status ===404){
					const userPayload = {
						name:userDisplayName,
						profilePicture: user.PhotoURL,
						id: user.uid
			
	};
	
	
					const newUser = await API.createUser(userPayload).then(res =>
					res.json());
					dispatch(loginSucess(newUser, token));
					dispatch(loaded());
					history.push('/');
					return newUser;
				}
				const existingUser = await res.json();
				dispatch(loginSucess(existingUser, token));
				dispatch(loaded());
				history.push('/');
				return existingUser;
			} catch(err){
				createError(err);
			}
		});
	};
	
}

