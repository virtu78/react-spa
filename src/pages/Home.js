
import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';
import DisplayItems from './DisplayItems';
import { useAuth } from "../context/auth";
import { Link, Redirect } from "react-router-dom"
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
	
function Home (props){


const referer  = props.location.referer || '/';
const [isLoggedIn, setLoggedIn] = useState(false);
const [isError, setIsError] = useState(false);
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const { setAuthTokens } = useAuth();
  
  
	   function postLogin() {
		   console.log(isLoggedIn);
	  var form = new FormData();
	  form.append("username","Example");
      form.append("password","123");
      form.append("email","example@example.com");
     form.append(" text","УУзнайте что-то абсолютно новое для себя. К примеру, есть ли вода на других планетах Солнечной системы?.");
    axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Friz', 
   form
    ).then(result => {
      if (result.status === 200 ) {
		  
        setAuthTokens(result.data);
        
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }
  
      if (isLoggedIn) {
    return <Redirect to={referer} />;
  }
		return (
			<div className="todoListMain">
				<div className="header">
					<Input placeholder="введите задачу">
					</Input>
					<Button onClick={postLogin}>Добавить</Button>				
				<DisplayItems />
			</div>
				
			</div>
		);
	
}
export default Home;



