export const fetchCoffees = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COFFEES' })
    fetch('http://localhost:3000/coffees').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_COFFEES', coffees: responseJSON.data })
    })
  }
}

export const fetchCoffee = (id) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COFFEE' })
    fetch(`http://localhost:3000/coffees/${id}`).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_COFFEE', roaster: responseJSON })
    })
  }
}