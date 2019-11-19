
import React, {Component} from "react";
import axios from 'axios';
import DisplayUser from './DisplayUserName';
import DisplayEmail from './DisplayEmail';
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
			mess:[]
		};
		
    	axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Fred')
		.then(result => {
       this.setState({mess: result.data.message.tasks});
       //console.log(this.state.mess)
        }).catch(e => {
        console.log("error")
		});

		
	}
	
	
	
	
	
	render(){	
		
		var todoEntries = this.state.mess;
		var itemDisplay = todoEntries.map(function(listItems){					
			return <li style={theListLi} key={listItems.id}>{listItems.text}</li>		
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
export default DisplayItems;
