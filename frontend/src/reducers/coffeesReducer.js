const coffeesReducer = (state = { coffees: [], coffee: {}, roasters: [], roaster: {}, myCoffees: [], loading: false }, action) => {
	switch (action.type) {
		case "LOADING_COFFEES":
      return {
        ...state,
        coffees: [],
        loading: true
      }
		case "ADD_COFFEES":
			return {
        ...state,
        coffees: action.coffees,
        loading: false
      }
    case "LOADING_COFFEE":
      return {
        ...state,
        coffee: [],
        loading: true
      }
    case "ADD_COFFEE":
      return {
        ...state,
        coffee: action.coffee.data.attributes,
        reviews: action.coffee.included,
        loading: false
      }
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
        roaster: action.roaster.data.attributes,
        myCoffees: action.roaster.included,
        loading: false
      }
		default:
			return state
	}
}

export default coffeesReducer