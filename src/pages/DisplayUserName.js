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
	
class DisplayUser extends Component {
	
	render(){		
	
		var todoUser = this.props.todo.slice(0,1);
		console.log(todoUser);
		var userDisplay = todoUser.map(function(showmeUser){
			return <li style={theListLi} key={showmeUser.id}>{"Пользователь " + showmeUser.username}</li>		
		});	
		return (
			<ul style={theList}>
				{userDisplay}
			</ul>
		);
	}
}
export default DisplayUser;
