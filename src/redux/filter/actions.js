import getData from '../../services/server'
import { FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './types'

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

export const fetchingData = () => {
  return async (dispatch) => {
    const result = await getData('http://localhost:3001/properties')
    dispatch(fetchDataSuccess(result[1]))
  }
}
