import {combineReducers} from 'redux'; // this will helps us to the combine the many reducers and make a single global reduce with global state.
import {changeNumber} from './add_sub'

// Now we will call the combineReducers to make global reducer and state. After it exports

const globalReducer = combineReducers({
    changeNumber
}) 

export default globalReducer;