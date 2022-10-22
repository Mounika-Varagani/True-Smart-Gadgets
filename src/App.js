import React from "react";
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/Home/LandingPage'
import 'bootstrap/dist/css/bootstrap.css'
import './pages/Home/styles.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/getSuggestions' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
