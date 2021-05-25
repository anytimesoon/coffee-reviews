import React, {Component} from 'react'
import {  Grid,
          Cell,
          Button,
          Reveal } from 'react-foundation';

class ReviewForm extends Component {
	state = {
		content: ""
	}

	closeReveal = () => {
		let form = document.getElementById("review-form")
		form.style.display = "none"
	}

	textareaHandler = e => {
		this.setState((state) => {
					return {content: e.target.value}
				})
	}

	submitHandler = e => {
		e.preventDefault()

		let formData = {content: this.state.content, coffee_id: this.props.coffee}
		this.props.sendFormData(formData)
		this.setState({content: ""})
		this.closeReveal()
	}

	render(){
						return  <Reveal id="review-form">
									  	<Grid className="grid-padding-x grid-padding-y">
									  		<Cell><h3>Write a review</h3></Cell>
									  		<Cell>
									  			<form onSubmit={e => this.submitHandler(e)}>
									  				<textarea name="content" placeholder="Write your review here..." onChange={e => this.textareaHandler(e)} value={this.state.content}/>

									  				<input type="submit" className="button" value="Send"/>
									  				<a onClick={e => this.closeReveal()} className="button hollow">Cancel</a>
									  			</form>
									  		</Cell>
									  	</Grid>
									  </Reveal>
	}
}
										  
export default ReviewForm