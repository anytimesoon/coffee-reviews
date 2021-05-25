import React, {Component} from 'react'
import {  Grid,
          Cell,
          Button,
          Reveal } from 'react-foundation';
import ReviewForm from './ReviewForm'
import ReviewCard from './ReviewCard'


class Reviews extends Component {
	openReveal = () => {
		let form = document.getElementById("review-form")
		form.style.display = "block"
	}

	renderReviewCards = () => {
		if(this.props.loading){
			return <p className="text-center">Loading...</p>			
		} else if(this.props.reviews.length > 0) {
			return this.props.reviews.map(review => <ReviewCard key={review.id} review={review} />)
		} else {
			return <Cell><p className="text-center">There are no reviews yet</p></Cell>
		}
	}

	render(){ return  <div>
											<ReviewForm sendFormData={this.props.sendFormData} coffee={this.props.coffee}/>
											<Grid>
												<Cell medium={9}><h3>Reviews</h3></Cell>
												<Cell medium={3}><Button onClick={e => this.openReveal()}>Write a review</Button></Cell>

												{this.renderReviewCards()}
											</Grid>
											
										</div>
				}
}

export default Reviews
// export default connect(mapStateToProps, mapDispatchToProps)(Reviews)