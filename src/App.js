import React, { Component } from 'react';
import HomePage from './Containers/HomePage'
import AboutPage from './Containers/AboutPage'
import WorksPage from './Containers/WorksPage'
import ContactPage from './Containers/ContactPage'


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header">
              <HomePage/>
              <AboutPage/>
              <WorksPage/>
              <ContactPage/>
          </div>
      </div>
    );
  }
}

export default App;
