const coffeesReducer = (state = { coffees: [], loading: false }, action) => {
	switch (action.type) {
		case "LOADING_COFFEES":
      return {
        ...state,
        coffees: [...state.coffees],
        loading: true
      }
		case "ADD_COFFEES":

		default:
			return state
	}
}

export default coffeesReducer