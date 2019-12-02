eport default {
	error: null,
	loading:  false,
	posts:[],
	pagination:{
		first:'process.env.ENDPOINT}/posts?_page=1&_sort=date&_order=DESC',
		net: null,
		prev: null,
		last: null
	}
user:{
	authentificated: false,
	profilePicture:null,
	id:null,
	name:null,
	token:null
	}
};

