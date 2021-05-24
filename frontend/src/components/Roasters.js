import React, {Component} from 'react'
import {  Grid,
          Cell } from 'react-foundation';
import { connect } from 'react-redux';
import { fetchRoasters } from '../actions/roasterActions'
import RoasterCard from './RoasterCard'
import Roaster from "./Roaster"
import {  Switch,
          Route,
          useParams } from "react-router-dom";


class Roasters extends Component {
 
  componentDidMount() {
    this.props.fetchRoasters()
  }

  loading = () => {
  	if (this.props.loading){
  		return <p className="text-center">Loading....</p>
  	} else {
  		return this.renderRoasters()
  	}
  }

  renderRoasters = () => this.props.roasters.map(roaster => <RoasterCard name={roaster.attributes.name} logo={roaster.attributes.logo} key={roaster.id} id={roaster.id}/>)

	render() {
		return  <div>
	  	        <Grid className="display grid-padding-x grid-padding-y">
								

                <Switch>
                  <Route path="/:roasterId" component={ShowRoaster} />
                  <Route path="/">
                    <Cell><h1>Roasters</h1></Cell>
                    {this.loading()}
                  </Route>
                </Switch>

              </Grid>
						</div>
	}
}

function ShowRoaster(){
  const { roasterId } = useParams()
  return <Roaster id={roasterId} />
}

const mapStateToProps = state => {
  return {
    roasters: state.roasters,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchRoasters: () => dispatch(fetchRoasters())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Roasters)