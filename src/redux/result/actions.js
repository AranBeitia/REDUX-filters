import getData from '../../services/server'

import { FETCH_DATA_SUCCESS } from './types'

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  }
}

export const fetchingData = () => {
  return async (dispatch) => {
    const result = await getData('http://localhost:3001/properties')
    dispatch(fetchDataSuccess(result[1]))
  }
}
