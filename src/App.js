import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/navigation/Navbar';

import Home from './components/pages/Home';
import CreateArticle from './components/article/Create';

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
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
