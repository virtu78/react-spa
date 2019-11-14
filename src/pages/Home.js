
import React, {Component} from "react";
import DisplayItems from "./DisplayItems";
import styled from 'styled-components';

const Button = styled.button`
padding: 10px;
font-size: 16px;
margin: 10px;
margin-right: 0px;
background-color: #0066FF;
color: #FFF;
border: pointer;
  &:hover {
background-color: #003399;
border: 2px solid #003399;
cursor: pointer;
  }
`;
const Input = styled.input`
padding: 10px;
font-size: 16px;
border: 2px solid #FFF;
width: 165px;
`;


	class Home extends Component {
		constructor(props){
			super(props);
	
			this.state={
				
				items: []
			};
			this.addItem = this.addItem.bind(this);
		}	
	
	
	addItem (e){
		var itemArray = this.state.items;
	
	if (this._inputElement.value !== "") {
		itemArray.unshift({
			text: this._inputElement.value,
			key: Date.now()
		});
		this.setState({
			items: itemArray
		})
		
		this._inputElement.value ="";
	}
		console.log(itemArray);
		e.preventDefault();
	}
render(){
	
  return (
  <div className="todoListMain">
			<div className="header">
				<form onSubmit={this.addItem}>
					<Input  ref={(a) => this._inputElement = a}
						placeholder="введите задачу">
					</Input>
					<Button type="submit">Добавить</Button>
				</form>
			</div>
			<DisplayItems entries={this.state.items}/>
		</div>
	);
}
}
export default Home;
