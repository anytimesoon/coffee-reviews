import React, {Component} from 'react'
import {  TopBar, 
					TopBarTitle, 
					Menu, 
					MenuItem, 
					Alignments } from 'react-foundation';
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
			return <TopBar>
			        <TopBarTitle>Coffee Reviews</TopBarTitle>
			        <Menu alignment={Alignments.RIGHT}>
							    <MenuItem><Link to="/">Home</Link></MenuItem>
							    <MenuItem><Link to="/coffees">Coffees</Link></MenuItem>
						  </Menu>
			      </TopBar>
		    }
}

export default Navbar