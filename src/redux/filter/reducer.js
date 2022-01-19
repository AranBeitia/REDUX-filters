import initialState from './state'
import { SEARCH_FILTER, RANGE_FILTER } from './types'

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCHING_DATA_SUCCESS: {
    //   const data = action.payload
    //   const filterResult = data.filter((res) =>
    //     res.street.includes(state.filters)
    //   )
    //   return {
    //     ...state,
    //     data: filterResult,
    //     isLoading: false,
    //   }
    // }

    case SEARCH_FILTER: {
      return {
        ...state,
        filters: action.payload,
      }
    }
    case RANGE_FILTER: {
      console.log(state.data)
      return {
        ...state,
        filters: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

export default filterReducer
