export const saveReview = (review) => {
  return (dispatch) => {
    dispatch({ type: 'SEND_REVIEW' })
    fetch('http://localhost:3000/reviews', config(review))
    		.then(response => { return response.json()})
    		.then(responseJSON => {
		      dispatch({ type: 'ADD_REVIEW', review: responseJSON.data })
		    })
  }
}

function config(review){  return {method: "POST",
																  headers: {
																    "Content-Type": "application/json",
																    "Accept": "application/json"
																  },
																  body: JSON.stringify(review)}
												}