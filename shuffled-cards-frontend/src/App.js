import React from 'react';
import Login from './components/login.js'
import HomePage from './components/homepage.js'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import decode from 'jwt-decode';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  try {
    decode(token);
  } catch (err) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        ))}
  />
);


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login}/>
          <PrivateRoute path='/homepage' exact component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
