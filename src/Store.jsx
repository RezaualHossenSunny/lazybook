import { configureStore } from '@reduxjs/toolkit'
import Userslice from './slices/Userslice'

export const store = configureStore({
  reducer: {
    userLoginInfo:Userslice
  },
})