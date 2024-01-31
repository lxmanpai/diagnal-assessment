import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../utils/constants"

// Shows redux slice to store shows related data
export const shows = createSlice({
  name: "shows",
  // Initial state of the slice with default data
  initialState: {
    pageNo: 1,
    searchQuery: "",
    allShows: [],
    filteredShows: [],
    hasMoreData: true,
  },
  // setter functions to modify different fields
  reducers: {
    setPageNo(state, action) {
      state.pageNo = action.payload
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload
    },
    setAllShows(state, action) {
      state.allShows = action.payload
    },
    setFilteredShows(state, action) {
      state.filteredShows = action.payload
    },
    appendFilteredShows(state, action) {
      state.filteredShows = [...state.filteredShows, ...action.payload]
    },
    appendShows(state, action) {
      state.allShows = [...state.allShows, ...action.payload]
    },
    setHasMoreData(state, action) {
      state.hasMoreData = action.payload
    },
  },
})

// Exporting all setters to expose them to the other components
export const {
  setAllShows,
  setFilteredShows,
  setPageNo,
  setSearchQuery,
  setFetching,
  appendShows,
  appendFilteredShows,
  setHasMoreData,
} = shows.actions

// Function to fetch the shows based on page number passed
export const getShowsList = (pageNo, cb) => (dispatch) => {
  axios
    .get(`${BASE_URL}/data/page${pageNo}.json`)
    .then((res) => {
      if (pageNo > 1) {
        // For case where we are appending data to existing data
        const newData = res?.data?.page?.["content-items"]?.content || []
        dispatch(appendFilteredShows(newData))
        dispatch(appendShows(newData))
      } else {
        // Case when we are fetching first page to set initial data
        const initData = res?.data?.page?.["content-items"]?.content || []
        dispatch(setFilteredShows(initData))
        dispatch(setAllShows(initData))
      }
    })
    .catch((e) => {
      console.error(e.message)
      // When the page returns error, it is marked as end of pagination
      dispatch(setHasMoreData(false))
    })
    .finally(() => {
      // Any callback logic if needed on completion of API call
      if (cb instanceof Function) {
        cb()
      }
    })
}

export default shows.reducer
