import { configureStore } from '@reduxjs/toolkit'
import CardSlices from './Slices/CardSlices'

export const Store = configureStore({
    reducer : {
      AllCart : CardSlices  
    }
})