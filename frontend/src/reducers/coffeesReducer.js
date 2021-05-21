const coffeesReducer = (state = { coffees: [], roasters: [], roaster: {}, myCoffees: [], loading: false }, action) => {
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
    case "LOADING_ROASTER":
      return {
        ...state,
        loading: true
      }
    case "ADD_ROASTER":
      return {
        ...state,
        roaster: action.roaster.attributes,
        myCoffees: action.roaster.relationships.coffees,
        loading: false
      }
		default:
			return state
	}
}

export default coffeesReducer