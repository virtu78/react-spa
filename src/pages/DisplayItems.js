
import React, {Component} from "react";
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
	render(){	
	var todoEntries = this.props.entries;		
	var itemDisplay=todoEntries.map(function(listItems){
	return <li style={theListLi} key={listItems.key}>{listItems.text}</li>		
	});	
		return (
		<ul style={theList}>
			{itemDisplay}
		</ul>
		);
	}
}
export default DisplayItems;
