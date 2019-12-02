import initialState from '../constants/initialState';
import * as types from '../constants/types';

export function posts(state = initialState.posts, action){
	switch (action.type) {
		case types.posts.GET:{
			const {posts} =action;
			let nextState = Object.assign({}, state);
			for (let post of posts){
				if (!nextState[post.id] = post;
			}
		}
		return nextState;
	}
	case types.posts.CREATE:{
		const {post} = action;
		let nextState = Object.assign({}, state);
		if (!nextState[post.id]=post;
	}
	return nextState
}
