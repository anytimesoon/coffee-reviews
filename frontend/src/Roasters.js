import React, {Component} from 'react'
import {  Grid,
          Cell } from 'react-foundation';
import { connect } from 'react-redux';
import { fetchRoasters } from './actions/roasterActions'

class Roasters extends Component {
 
  componentDidMount() {
    this.props.fetchRoasters()
  }

  loading = () => {
  	if (this.props.loading){
  		return <p>Loading....</p>
  	} else {
  		return this.renderRoasters(this.props.roasters)
  	}
  }

  renderRoasters = (roasters) => {
    console.log(roasters)
  	return <h3>List of roasters</h3>
  }

	render() {
		return  <div>
	  	        <Grid className="display grid-padding-x grid-padding-y">
								<h1>Roasters</h1>
                {this.loading()}
							</Grid>
						</div>
	}
}

const mapStateToProps = state => {
  return {
    roasters: state.roasters,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchRoasters: () => dispatch(fetchRoasters())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Roasters)