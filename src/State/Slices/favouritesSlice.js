import { createSlice } from "@reduxjs/toolkit";

export const favourtiteSlice = createSlice({
    name: 'favSlice',
    initialState: {
        favouriteCountries: [],
        isCountryAdded: []
    },
    reducers: {
        addToFavourites: (state, action) => {
            state.isCountryAdded.push({ name: action.payload.favouriteCountry.name, isAdded: true })
            state.favouriteCountries.push(action.payload.favouriteCountry);
        },
        removeFromFavourites: (state, action) => {
            const index = state.isCountryAdded.findIndex((item) => item.name == action.payload.country);
            state.isCountryAdded[index].isAdded = false
            state.favouriteCountries = state.favouriteCountries.filter((item) => item.name != action.payload.country);
        }
    }
})


//export the actions
export const { addToFavourites, removeFromFavourites } = favourtiteSlice.actions;
//export the reducer

export default favourtiteSlice.reducer;