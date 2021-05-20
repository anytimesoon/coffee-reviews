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
 
  // componentDidMount() {
  //   console.log(this.props)
  //   this.props.fetchCats()
  // }

  // loading = () => {
  // 	if (this.props.loading){
  // 		return <p>Loading....</p>
  // 	} else {
  // 		return <CatList catPics={this.props.catPics} />
  // 	}
  // }
 
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
 
// const mapStateToProps = state => {
//   return {
//     catPics: state.cats,
//     loading: state.loading
//   }
// }
 
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCats: () => dispatch(fetchCats())
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App