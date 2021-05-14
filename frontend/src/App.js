import React, { Component } from 'react';
import { connect } from 'react-redux';
 
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
    console.log(this.props.catPics) // log will fire every time App renders
    return (
      <div className="App">
        <h1>Coffee Reviews</h1>
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