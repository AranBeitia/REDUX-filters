import initialState from './state'
import {
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  SEARCH_FILTER,
} from './types'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA_SUCCESS: {
      const data = action.payload
      const filterResult = data.filter((res) =>
        res.street.includes(state.filters)
      )
      return {
        ...state,
        data: filterResult,
        isLoading: false,
      }
    }
    case FETCHING_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    }
    case SEARCH_FILTER: {
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

export default reducer
