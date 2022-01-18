import getData from '../../services/server'
import {
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  SEARCH_FILTER,
  RANGE_FILTER,
} from './types'

export const fetchDataSuccess = (data) => {
  return {
    type: FETCHING_DATA_SUCCESS,
    payload: data,
  }
}
export const fetchDataFailure = () => {
  return {
    type: FETCHING_DATA_FAILURE,
  }
}

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

export const fetchingData = () => {
  return async (dispatch) => {
    dispatch(searchFilter)
    const result = await getData('http://localhost:3001/properties')
    dispatch(fetchDataSuccess(result[1]))
  }
}
