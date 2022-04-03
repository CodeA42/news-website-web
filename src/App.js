import React, { useState, useEffect } from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/navigation/Navbar';

import Home from './components/pages/Home';
import CreateArticle from './components/article/Create';
import Article from './components/article/Article';
import Login from './components/user/Login';
import Logout from './components/user/Logout';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import { UserContext } from './components/context/user';
import jwt from "jsonwebtoken";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    if(localStorage.getItem('accessToken')){
      const payload = jwt.decode(localStorage.getItem('accessToken'))
      if(payload.exp > Date.now() / 1000){
        setUser({
          id: payload.id,
          username: payload.username
        })
      } else {
        //TODO: call auth/refresh
      }
    } else {
      //TODO: call auth/refresh
    }
  },[])

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path="/article/create">
              <CreateArticle />
            </Route>
            <Route path="/article/:id">
              <Article/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/logout">
              <Logout/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path='/:id'>
              <Profile/>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
