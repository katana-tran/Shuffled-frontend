import React from 'react';
import Login from './components/test.js'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
