import React, { useState } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContext } from './context/auth';
import './index.css';

function Main(props) {
	const [authTokens, setAuthTokens] = useState();
	
	const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
		return(
		
			<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
				<Router>
					<div>
						<h1>Задачник</h1>
						<ul className="header">
							<li ><Link to="/login">Вход</Link></li>
							<li><Link to="/">Задачи</Link></li>
							<li><Link to="/admin">Редактировать задачи</Link></li>
							
							
						</ul>
						<div className="content">
							<Route exact path="/" component={Home}/>
							<Route path="/login" component={Login} />
							<Route path="/signup" component={Signup} />
							<PrivateRoute path="/admin" component={Admin}/>					
						</div>
					</div>
				</Router>
			</AuthContext.Provider>
		);
}
	
export default Main;
