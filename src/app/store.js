import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/UserSlice'
import tokenReducer from '../features/TokenSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
    }
})