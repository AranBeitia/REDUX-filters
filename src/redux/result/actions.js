import getData from '../../services/server'

import { FETCH_DATA_SUCCESS } from './types'

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  }
}

export const fetchingData = (filters) => {
  return async (dispatch) => {
    const result = await getData(filters)
    dispatch(fetchDataSuccess(result[1]))
  }
}
