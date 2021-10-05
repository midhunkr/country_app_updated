import { createSlice } from "@reduxjs/toolkit";

export const favourtiteSlice = createSlice({
    name: 'favSlice',
    initialState: {
        favouriteCountries: [],
        isCountryAdded: [],
        startingIndex:0,
        updatedData:[]
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
        },
        sendNewData: (state, action) => {
            const index = action.payload.newIndex;
            let count = 0;

            while (state.updatedData.length > 0) {

                state.updatedData.pop()

            }
            if (index === 0) {
                state.startingIndex = 0;
            }
            else {
                state.startingIndex = (index + 1) * 5 - 5;
            }
            while (state.startingIndex <= state.favouriteCountries.length - 1 && count != 5) {
                state.updatedData.push(state.favouriteCountries[state.startingIndex]);
                state.startingIndex += 1
                count += 1;
            }

        }
    }
})


//export the actions
export const { sendNewData,addToFavourites, removeFromFavourites } = favourtiteSlice.actions;
//export the reducer

export default favourtiteSlice.reducer;