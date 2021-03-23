import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/public/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/common/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import { AuthContext } from "./context/auth";
import './App.css';

function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
			<Router>
				<div className="App">
					<Route exact path="/" component={Landing} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
				</div>
			</Router>
		</AuthContext.Provider>
  );
}

export default App;
