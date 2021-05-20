const coffeesReducer = (state = { coffees: [], roasters: [], loading: false }, action) => {
	switch (action.type) {
		case "LOADING_COFFEES":
      return {
        ...state,
        coffees: [...state.coffees],
        loading: true
      }
		case "ADD_COFFEES":
			break;
		case "LOADING_ROASTERS":
			return {
        ...state,
        roasters: [],
        loading: true
      }
    case "ADD_ROASTERS":
			return {
        ...state,
        roasters: action.roasters,
        loading: false
      }
		default:
			return state
	}
}

export default coffeesReducer