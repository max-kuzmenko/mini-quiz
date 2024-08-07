import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    // add your reducers
})

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store;