import React, {Component} from 'react'
import {connect} from 'react-redux'
import {  Grid,
          Cell } from 'react-foundation';
import {fetchCoffee} from '../actions/coffeeActions'

class Coffee extends Component {
	componentDidMount() {
    this.props.fetchCoffee(this.props.id)
  }

	render() {
		return  <div>
							{console.log(this.props.coffee)}
	  	        <Grid className="display grid-padding-x grid-padding-y">
	  	        	<Cell medium={6}>
	  	        		<h1>{this.props.coffee.name}</h1>
	  	        		<h4 className="subheader">{this.props.coffee.roast_level} roast</h4>
	  	        	</Cell>

	  	        	<Cell medium={6}>
	  	        		<h4>Tasting notes</h4>
	  	        		<p>{this.props.coffee.tasting_notes}</p>
	  	        	</Cell>

	  	        	<Cell>
	  	        		<h3>Roasters</h3>
	  	        	</Cell>
							</Grid>
						</div>
	}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoffee: (id) => dispatch(fetchCoffee(id))
  }
}

const mapStateToProps = state => {
  return {
    coffee: state.coffee,
    reviews: state.reviews,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coffee)