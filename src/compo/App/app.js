import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../App';
import Login from '../Login/Login';
import Write from '../write';
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Write">
            <Write />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;