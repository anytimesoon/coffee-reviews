import React, {Component} from 'react'
import { Cell } from 'react-foundation';

class ReviewCard extends Component {
	render(){
						return  <Cell>
											{console.log(this.props.review)}
											<p className="italics">Someone wrote:</p>
											<p>{this.props.review.attributes.content}</p>
										</Cell>
	}
}

export default ReviewCard