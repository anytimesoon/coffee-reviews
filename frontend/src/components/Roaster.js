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
								<RoasterCoffees coffees={this.props.myCoffees} />
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
    myCoffees: state.myCoffees
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roaster)