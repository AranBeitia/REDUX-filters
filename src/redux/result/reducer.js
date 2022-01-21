import initialState from './state'
import { FETCH_DATA_SUCCESS } from './types'

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        data: action.payload,
      }
    default:
      return {
        state,
      }
  }
}

export default dataReducer
