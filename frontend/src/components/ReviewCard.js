import React, {Component} from 'react'
import { Cell } from 'react-foundation';

class ReviewCard extends Component {
	render(){
						return  <Cell>
											<p className="italics">{this.props.review.attributes.author} wrote:</p>
											<p>{this.props.review.attributes.content}</p>
										</Cell>
	}
}

export default ReviewCard