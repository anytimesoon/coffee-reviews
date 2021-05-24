import React, {Component} from 'react'
import {  Grid,
          Cell } from 'react-foundation';
import Coffee from './Coffee'
import {  Switch,
          Route,
          useParams } from "react-router-dom";

class Coffees extends Component {
	render() {
		return  <div>
							<Switch>
								<Route path="/coffees/:coffeeId" component={ShowCoffee} />
								<Route path="/coffees">
			  	        <Grid className="display grid-padding-x grid-padding-y">
			  	        	<Cell>
											<h1>Coffees</h1>
										</Cell>
									</Grid>
								</Route>
							</Switch>
						</div>
	}
}


function ShowCoffee(){
  const { coffeeId } = useParams()
  return <Coffee id={coffeeId} />
}

export default Coffees