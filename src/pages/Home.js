
import React  from "react";

import styled from 'styled-components';
import axios from 'axios';
import DisplayItems from './DisplayItems';
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
	

class Home extends React.Component{
	constructor(props) {
    super(props);
		this.state = {
			mess:[]
		};
	}
	componentWillMount(){
		axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2?developer=Fred')
		.then(result => {
       this.setState({mess: result.data.message.tasks});
       //console.log(this.state.mess)
        }).catch(e => {
        console.log("error")
		});
	}
	
	componentDidMount(){
	 
	
}
	
	  post() {
	  var form = new FormData();
	  form.append("username","Example");
      form.append("password","123");
      form.append("email","example@example.com");
     form.append(" text","УУзнайте что-то абсолютно новое для себя. К примеру, есть ли вода на других планетах Солнечной системы?.");
    axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Fred', 
   form
    ).then(result => {
      
       console.log(result)
       }).catch(e => {
        console.log("error")
		});
	}
	render(){

		return (
		
			<div className="todoListMain">
				<div className="header">
					<form >
						<Input placeholder="введите задачу">
						</Input>
						<Button onClick={this.post}>Добавить</Button>
					</form>
				<DisplayItems mess={this.state.mess}/>
				</div>
				
			</div>
		);
	}
}
export default Home;



