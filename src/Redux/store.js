// This file is create for the creating the store in browser Redux section for state storing
import {createStore} from 'redux'; // it was depreciated
import {persistStore, persistReducer} from 'redux-persist' // middileware for persisting the stat as it is 
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import globalReducer from './Reducer/index'; // root reducer

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, globalReducer)

// const store = createStore(globalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let store = createStore(persistedReducer);
let persistor = persistStore(store);


export  { store, persistor }
