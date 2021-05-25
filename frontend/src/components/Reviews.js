import React, {Component} from 'react'
import {  Grid,
          Cell,
          Button,
          Reveal } from 'react-foundation';
import ReviewForm from './ReviewForm'
// import { connect } from 'react-redux';

class Reviews extends Component {
	openReveal = () => {
		let form = document.getElementById("review-form")
		form.style.display = "block"
	}

	render(){ return  <div>
											<Grid>
												<Cell className="auto"><h3>Reviews</h3></Cell>
												<Cell className="shrink"><Button onClick={e => this.openReveal()}>Write a review</Button></Cell>
											</Grid>
											<ReviewForm />
										</div>
				}
}

export default Reviews