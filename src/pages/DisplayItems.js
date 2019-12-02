
import React, {Component} from "react";
//import { connect } from 'react-redux';
//import { addTodo } from '../actions';


//import axios from 'axios';
//import fetch from 'isomorphic-fetch';
//import {connect} from 'react-redux';


//import getposts  from "../actions/posts";
import DisplayUser from './DisplayUserName';
import DisplayEmail from './DisplayEmail';
import Edit from './Edit';
const theList ={
listStyle: "none",
paddingLeft: "0",
width: "250px"
}
const theListLi ={
color: "#333",
backgroundColor: "#F5F5DC",
padding: "15px",
marginBottom: "15px",
borderRadius: "5px"
}
class DisplayItems extends Component {
		constructor(props) {
    super(props);
    this.state = {
		   mess:[],
            itemDisplay: [],
			
			
		};
		
		/*axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Friz')
		.then(result => {
       this.setState({mess: result.data.message.tasks});
        console.log(this.state.mess)
        }).catch(e => {
        console.log("error")
		});
	*/
    	
	
	
}
	
	render(){	
		
		    const	{  mess }	=	this.state
		    
		    console.log(this.state.mess);
			let itemDisplay = this.state.mess.map((val,key)=> {			
            return (<Edit 
            key={key}
            text={val.text} 
            />
            );
            });
		return (
		<div>
			<DisplayUser mess={this.state.mess}/>
			<DisplayEmail mess={this.state.mess}/>
			<ul style={theList}>
				{itemDisplay}
			</ul>
			</div>
		);
	}
}
/*
const mapStateToProps = (state) => ({
    mess: state.mess
    
});

const mapDispatchToProps = (dispatch) => ({
    
    getposts: () => dispatch(getposts())
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayItems);

*/
export default DisplayItems
