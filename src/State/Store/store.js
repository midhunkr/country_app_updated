import { configureStore } from "@reduxjs/toolkit"
import fetchDataSlice from "../Slices/fetchDataSlice"
import favouritesSlice from "../Slices/favouritesSlice"
export const store=configureStore({
    reducer:{
        fetchData:fetchDataSlice,
        favourites:favouritesSlice
        
    }
})