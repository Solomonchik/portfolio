import React, { Component } from 'react';
import HomePage from './Containers/HomePage'
import AboutPage from './Containers/AboutPage'
import WorksPage from './Containers/WorksPage'
import ContactPage from './Containers/ContactPage'
import Navigation from './Containers/Navigation'
import {Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
          <div className="App">
              <div className="header">
                  <Navigation/>
              </div>
              <Switch>
                  <Route path="/" exact component={HomePage}/>
                  <Route path="/about" component={AboutPage}/>
                  <Route path="/works" component={WorksPage}/>
                  <Route path="/contact" component={ContactPage}/>
              </Switch>
          </div>
    );
  }
}

export default App;
