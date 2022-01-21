import getData from '../../services/server'
import { SEARCH_FILTER, RANGE_FILTER, CHANGE_TYPE_HOME } from './types'

export const searchFilter = (value) => {
  return {
    type: SEARCH_FILTER,
    payload: value,
  }
}

export const rangeFilter = (value) => {
  return {
    type: RANGE_FILTER,
    payload: value,
  }
}

export const changeTypeHome = (value) => {
  return {
    type: CHANGE_TYPE_HOME,
    payload: value,
  }
}

// export const fetchingData = () => {
//   return async (dispatch) => {
//     dispatch(searchFilter)
//     const result = await getData('http://localhost:3001/properties')
//     dispatch(fetchDataSuccess(result[1]))
//   }
// }
