export const fetchRoasters = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ROASTERS' })
    fetch('http://localhost:3000/roasters').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_ROASTERS', roasters: responseJSON.data })
    })
  }
}

export const fetchRoaster = (id) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ROASTER' })
    fetch(`http://localhost:3000/roasters/${id}`).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_ROASTER', roaster: responseJSON })
    })
  }
}