import React, {Component} from 'react'
import {  Grid,
          Cell } from 'react-foundation';

class Roaster extends Component {
	render() {
		return  <div>
							<h1>Roaster</h1>
							<p>ID: {this.props.id}</p>
						</div>
	}
}

export default Roaster