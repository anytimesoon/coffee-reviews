import React, {Component} from 'react'
import {connect} from 'react-redux'
import {  Grid,
          Cell } from 'react-foundation';
import {fetchCoffee} from '../actions/coffeeActions'
import Reviews from './Reviews'
import {saveReview} from '../actions/reviewActions'

class Coffee extends Component {
	componentDidMount() {
    this.props.fetchCoffee(this.props.id)
  }

	sendFormData = (formData) => {
		this.props.saveReview(formData)
	}

	render() {
		return  <div>
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
	  	        		<Reviews coffee={this.props.id} sendFormData={this.sendFormData} reviews={this.props.reviews} loading={this.props.loading}/>
	  	        	</Cell>
							</Grid>
						</div>
	}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCoffee: (id) => dispatch(fetchCoffee(id)),
    saveReview: (review) => dispatch(saveReview(review))
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