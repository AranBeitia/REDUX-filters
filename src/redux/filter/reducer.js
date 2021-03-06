import initialState from './state'
import {
  SEARCH_FILTER,
  RANGE_FILTER,
  CHANGE_TYPE_HOME,
  CHANGE_CONDITION,
  SELECT_BEDROOMS,
  SELECT_BATHROOMS,
} from './types'

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
        let duplicated = state.type.find((i) => i === action.payload)
        if (duplicated) {
          let newItem = state.type.filter((el) => el !== duplicated)
          return {
            ...state,
            type: [...newItem],
          }
        } else {
          return { ...state, type: [...state.type, action.payload] }
        }
      }
    }

    case CHANGE_CONDITION: {
      if (action.payload) {
        let duplicated = state.condition.find((i) => i === action.payload)
        if (duplicated) {
          let newItem = state.condition.filter((el) => el !== duplicated)
          return {
            ...state,
            condition: [...newItem],
          }
        } else {
          return {
            ...state,
            condition: [...state.condition, action.payload],
          }
        }
      }
    }

    case SELECT_BEDROOMS: {
      if (action.payload) {
        let duplicated = state.room.find((i) => i === action.payload)
        if (duplicated) {
          let newItem = state.room.filter((el) => el !== duplicated)
          return {
            ...state,
            room: [...newItem],
          }
        } else {
          return {
            ...state,
            room: [...state.room, action.payload],
          }
        }
      }
    }
    case SELECT_BATHROOMS: {
      if (action.payload) {
        let duplicated = state.bath.find((i) => i === action.payload)

        if (duplicated) {
          let newItem = state.bath.filter((el) => el !== duplicated)

          return {
            ...state,
            bath: [...newItem],
          }
        } else {
          return {
            ...state,
            bath: [...state.bath, action.payload],
          }
        }
      }
      return {}
    }

    default: {
      return state
    }
  }
}

export default filterReducer
