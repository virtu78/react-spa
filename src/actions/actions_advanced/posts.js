import * as types from 'parse-link-header';
import * as types from '../constants/types';
import *as API from '..shared/http';
import {createError} from './error';

export function AvaillableMessages(messages){
	return{
		type: type.posts.GET,
		posts
	};
}
eport function updatePaginationLinks(links){
	return{
		type: types.posts.UPDATE_LINKS, links
	};
}

