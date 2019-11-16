import React from 'react';
import Test from './components/test.js'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Test}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
