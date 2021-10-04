import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchDataAsync = createAsyncThunk('fetchdata',
    async () => {
        const response = await axios.get('https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/countries?f=pjson')
        return { response }
    }
)
export const fetchData = createSlice({
    name: 'fetch',
    initialState: {
        isLoading: true,
        activeContinent: '',
        countryData: [],
        continentData: [],
        filteredCountryList: [],
        isLoggedIn: false,
        userDetails: []
    },
    reducers: {
        filterCountryList: (state, action) => {
            const filter = action.payload.filter;
            const filteredCountryData = state.countryData.filter((item) => item.continent == filter)
            state.filteredCountryList = filteredCountryData;
            state.activeContinent = filter;
            console.log('slice begins');
            console.log(filteredCountryData);
            console.log('slice ends');
        },
        notifyLogin: (state, action) => {
            state.userDetails = []
            state.userDetails.push(action.payload.userData)

            console.log(state.userDetails);
            console.log("the user data tis");
            console.log(action.payload.userData.email);
            console.log("the user data tis");
            state.isLoggedIn = true;

        },
        updateUserCredentials: (state, action) => {
            state.userDetails = [];
            state.userDetails.push(action.payload.userData)
        }
    },
    extraReducers: {
        [fetchDataAsync.fulfilled]: (state, action) => {
            const continents = [];
            state.countryData = action.payload.response.data.countries
            action.payload.response.data.countries.forEach((item) => {
                if (!continents.includes(item.continent)) {
                    continents.push(item.continent)
                }
            })
            state.continentData = continents;
            // console.log(continents);
            state.isLoading = false;
        }
    }
})

export const { filterCountryList, notifyLogin,updateUserCredentials } = fetchData.actions;

export default fetchData.reducer;