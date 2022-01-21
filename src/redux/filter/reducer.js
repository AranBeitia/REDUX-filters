import initialState from './state'
import { SEARCH_FILTER, RANGE_FILTER, CHANGE_TYPE_HOME } from './types'

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
        type: action.payload,
      }
    }
    // case RANGE_FILTER: {
    //   console.log(state.data)
    //   return {
    //     ...state,
    //     filters: action.payload,
    //   }
    // }

    case CHANGE_TYPE_HOME: {
      if (action.payload) {
        let duplicated = state.typeHouse.find((i) => i === action.payload)
        if (duplicated) {
          let newItem = state.typeHouse.filter((el) => el !== duplicated)
          return {
            ...state,
            typeHouse: [...newItem],
          }
        } else {
          return { ...state, typeHouse: [...state.typeHouse, action.payload] }
        }
      }
    }

    default: {
      return state
    }
  }
}

export default filterReducer
