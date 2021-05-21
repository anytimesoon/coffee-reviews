import React from 'react'
import {  Cell } from 'react-foundation';
import {  Link } from "react-router-dom";

const RoasterCard = props =>  <Cell small={12} medium={4} className="border">

															      <h3>{props.coffee.attributes.name}</h3>

															      <ul className="no-bullet">
															      	<li>{props.coffee.attributes.tasting_notes}</li>
															      	<li>{props.coffee.attributes.roast_level} roast</li>
															      </ul>


															  <Link to={`/${props.coffee.attributes.id}`} className="button">Read about this bean</Link>

															  
															</Cell>

export default RoasterCard
