import React, {Component} from 'react'
import { connect } from 'react-redux';
import { fetchRoaster } from '../actions/roasterActions'
import {  Grid,
          Cell,
					MediaObject,
					MediaObjectSection,
					Thumbnail  } from 'react-foundation';
import RoasterCoffees from './RoasterCoffees'

class Roaster extends Component {

  componentDidMount() {
    this.props.fetchRoaster(this.props.id)
  }

  loadingCoffees = () => {
  	if (this.props.loading) {
  		return <p className="text-center">Loading....</p>
  	} else {
  		return <RoasterCoffees coffees={this.props.myCoffees} />
  	}
  }

	render() {
		return  <Grid>
							<Cell>
								
								<MediaObject>
							    <MediaObjectSection>
							      <Thumbnail src={this.props.roaster.logo}/>
							    </MediaObjectSection>
							    <MediaObjectSection isMain>
							      <h1>{this.props.roaster.name}</h1>
							    </MediaObjectSection>
							  </MediaObject>
							</Cell>
							<Cell>
								{this.loadingCoffees()}
							</Cell>
						</Grid>
	}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRoaster: (id) => dispatch(fetchRoaster(id))
  }
}

const mapStateToProps = state => {
  return {
    roaster: state.roaster,
    myCoffees: state.myCoffees,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roaster)