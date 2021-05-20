import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  BrowserRouter as Router,
          Switch,
          Route
        } from "react-router-dom";
import Navbar from './Navbar'
import Roasters from './Roasters'
import Coffees from './Coffees'
 
class App extends Component {
 
  render() {

    return (
      <div className="App">
        <Router>
        	<Navbar />


          <div className="grid-container">

              
    					  <Switch>
                  <Route path="/coffees">
                    <Coffees />
                  </Route>
                  <Route path="/">
                    <Roasters />
                  </Route>
                </Switch>

  				</div>

        </Router>
      </div>
    );
  }
}

export default App