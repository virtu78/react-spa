import React, {Component} from "react";
const theList ={
listStyle: "none",
paddingLeft: "0",
width: "250px"
}
const theListLi ={
color: "#0066FF",
backgroundColor: "#FFF",
padding: "15px",
marginBottom: "15px",
borderRadius: "5px"
}
	
class DisplayEmail extends Component {
	render(){			
		var todoEmail = this.props.todo.slice(0,1);
		var emailDisplay = todoEmail.map(function(showmeEmail){						
			return <li style={theListLi} key={showmeEmail.id}>{showmeEmail.email}</li>		
		});	
		return (
			<ul style={theList}>
				{emailDisplay}
			</ul>
		);
	}
	}
export default DisplayEmail;
