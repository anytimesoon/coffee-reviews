import React, {Component} from 'react'
import {  Grid,
          Cell } from 'react-foundation';

class Roaster extends Component {
	render() {
		return  <Grid>
							<Cell>
								<h1>Roaster</h1>
							</Cell>
							<Cell>
								<p>ID: {this.props.id}</p>
							</Cell>
						</Grid>
	}
}

export default Roaster