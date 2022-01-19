import { combineReducers } from 'redux'
import filterReducer from './filter/reducer'
import dataReducer from './result/reducer'

const reducers = combineReducers({
  filter: filterReducer,
  result: dataReducer,
})

export default reducers
