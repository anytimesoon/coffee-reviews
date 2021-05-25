import React, {Component} from 'react'
import {  Grid,
          Cell,
          Button,
          Reveal } from 'react-foundation';

class ReviewForm extends Component {
	state = {
		author: "",
		content: ""
	}

	closeReveal = () => {
		let form = document.getElementById("review-form")
		form.style.display = "none"
	}

	inputHandler = e => {
		this.setState((state) => {
					return {[e.target.name]: e.target.value}
				})
	}

	submitHandler = e => {
		e.preventDefault()

		let formData = {author: this.state.author, content: this.state.content, coffee_id: this.props.coffee}
		this.props.sendFormData(formData)
		this.setState({author: "", content: ""})
		this.closeReveal()
	}

	render(){
						return  <Reveal id="review-form">
									  	<Grid className="grid-padding-x grid-padding-y">
									  		<Cell><h3>Write a review</h3></Cell>
									  		<Cell>
									  			<form onSubmit={e => this.submitHandler(e)}>
									  				<input type="text" placeholder="What's your name?" name="author" onChange={e => this.inputHandler(e)}/>
									  				<textarea name="content" placeholder="Write your review here..." onChange={e => this.inputHandler(e)} value={this.state.content}/>

									  				<input type="submit" className="button" value="Send"/>
									  				<a onClick={e => this.closeReveal()} className="button hollow">Cancel</a>
									  			</form>
									  		</Cell>
									  	</Grid>
									  </Reveal>
	}
}
										  
export default ReviewForm