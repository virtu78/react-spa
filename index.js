import React from "react";
import ReactDOM from "react-dom";
import{createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {Provuder} from "react-redux";
import todoApp from "../reducers/todoApp";
import Main from "./Main";
const thunk = ReduxThunk.default;
let store = createStore(todoApp, initialState, applyMiddleware(thunk));
ReactDOM.render{
	<Provider	store={store}>
		<Main/>;
	</Povider>
	document.getElementById("root")
};
