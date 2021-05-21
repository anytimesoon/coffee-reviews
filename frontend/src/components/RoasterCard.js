import React from 'react'
import {  Cell,
					MediaObject,
					MediaObjectSection,
					Thumbnail } from 'react-foundation';
import {  Link } from "react-router-dom";

const RoasterCard = props =>  <Cell small={12} medium={4}>
																
																<MediaObject>
															    <MediaObjectSection>
															      <Thumbnail src={props.logo}/>
															    </MediaObjectSection>
															    <MediaObjectSection isMain>
															      <h3>{props.name}</h3>
															    </MediaObjectSection>
															  </MediaObject>

															  <Link to={`/${props.id}`} className="button">See more from {props.name}</Link>

															  
															</Cell>

export default RoasterCard
