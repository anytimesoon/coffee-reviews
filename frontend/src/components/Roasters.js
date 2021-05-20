import React, {Component} from 'react'
import {  Grid,
          Cell } from 'react-foundation';
import { connect } from 'react-redux';
import { fetchRoasters } from '../actions/roasterActions'
import RoasterCard from './Roaster'

class Roasters extends Component {
 
  componentDidMount() {
    this.props.fetchRoasters()
  }

  loading = () => {
  	if (this.props.loading){
  		return <p>Loading....</p>
  	} else {
  		return this.renderRoasters()
  	}
  }

  renderRoasters = () => this.props.roasters.map(roaster => <RoasterCard name={roaster.attributes.name} logo={roaster.attributes.logo}/>)

	render() {
		return  <div>
	  	        <Grid className="display grid-padding-x grid-padding-y">
								<Cell><h1>Roasters</h1></Cell>
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