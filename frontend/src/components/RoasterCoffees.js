import React, {Component} from 'react'
import {  Grid,
          Cell  } from 'react-foundation';
import CoffeeCard from './CoffeeCard'

class RoasterCoffees extends Component {

	renderCoffeeCards = () => {
		if(this.props.coffees.length > 0){
			return this.props.coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}/>)
		} else {
			return <p className="text-center">nothing to see here...</p>
		}
	}

	render(){
		return  <Grid>
							<Cell><h2>Our Coffees</h2></Cell>

							{this.renderCoffeeCards()}
						</Grid>
	}
}

export default RoasterCoffees