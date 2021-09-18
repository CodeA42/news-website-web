import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/navigation/Navbar';

import Home from './components/pages/Home';
import CreateArticle from './components/article/Create';
import Article from './components/article/Article';
import Login from './components/profile/Login';
import Register from './components/profile/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/article/create">
            <CreateArticle />
          </Route>
          <Route path="/article/:id">
            <Article/>
          </Route>
          <Route path="/profile/login">
            <Login/>
          </Route>
          <Route path="/profile/register">
            <Register/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
