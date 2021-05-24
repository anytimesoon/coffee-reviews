import React, {Component} from 'react'
import {  Grid,
          Cell } from 'react-foundation';
import Coffee from './Coffee'
import CoffeeCard from './CoffeeCard'
import {  Switch,
          Route,
          useParams } from "react-router-dom";
import { fetchCoffees } from '../actions/coffeeActions'
import { connect } from 'react-redux';

class Coffees extends Component {
  componentDidMount() {
    this.props.fetchCoffees()
  }

  loading = () => {
  	if (this.props.loading){
  		return <p className="text-center">Loading...</p>
  	} else {
  		return this.props.coffees.map(coffee => <CoffeeCard name={coffee.attributes.name} key={coffee.id} coffee={coffee}/>)
  	}
  }

	render() {
		return  <div>
							<Switch>
								<Route path="/coffees/:coffeeId" component={ShowCoffee} />
								<Route path="/coffees">
			  	        <Grid className="display grid-padding-x grid-padding-y">
			  	        	<Cell><h1>Coffees</h1></Cell>
			  	        	{this.loading()}
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

const mapStateToProps = state => {
  return {
    coffees: state.coffees,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchCoffees: () => dispatch(fetchCoffees())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coffees)