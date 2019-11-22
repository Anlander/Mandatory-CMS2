import React from 'react';
import {Component} from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Blogg from "./Components/Article";
import Authors from "./Components/Authors";

class App extends Component {
  render(){
    return (
  <div>
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Product/:id" component={Blogg} />
          <Route path="/Authors/" component={Authors} />
        </Switch>
      </BrowserRouter>


  </div>

    )
  }
}

export default App;
