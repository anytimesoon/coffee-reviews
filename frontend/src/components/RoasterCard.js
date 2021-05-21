import React from 'react'
import {  Cell,
					MediaObject,
					MediaObjectSection,
					Thumbnail,
					Button } from 'react-foundation';
import {  BrowserRouter as Router,
          Switch,
          Route,
          Link,
          useRouteMatch,
          useParams } from "react-router-dom";
import Roaster from './Roaster'




const RoasterCard = props =>  <Cell small={12} medium={4}>
																
																<MediaObject>
															    <MediaObjectSection>
															      <Thumbnail src={props.logo}/>
															    </MediaObjectSection>
															    <MediaObjectSection isMain>
															      <h3>{props.name}</h3>
															    </MediaObjectSection>
															  </MediaObject>

															  <Link to={`/${props.id}`}>See more from {props.name}</Link>

															  
															</Cell>

export default RoasterCard

// <Cell small={12} medium={4}><h3>{this.props.name}</h3></Cell>