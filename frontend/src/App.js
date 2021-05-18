import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell, TopBar, TopBarTitle } from 'react-foundation';
 
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
      	<TopBar>
	        <TopBarTitle>Coffee Reviews</TopBarTitle>
	      </TopBar>
        <div className="grid-container">
	        <Grid className="display grid-padding-x grid-padding-y">
					  <Cell small={12} medium={3} large={4}>4 columns</Cell>
					  <Cell small={12} medium={3} large={4}>4 columns</Cell>
					  <Cell small={12} medium={3} large={4}>4 columns</Cell>
					  <Cell small={12} medium={3} large={4}>4 columns</Cell>
					</Grid>
				</div>
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