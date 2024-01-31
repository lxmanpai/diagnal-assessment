import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../utils/constants"

export const shows = createSlice({
  name: "shows",
  initialState: {
    pageNo: 1,
    searchQuery: "",
    allShows: [],
    filteredShows: [],
    hasMoreData: true,
  },
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

export const getShowsList = (pageNo, cb) => (dispatch) => {
  axios
    .get(`${BASE_URL}/data/page${pageNo}.json`)
    .then((res) => {
      if (pageNo > 1) {
        dispatch(
          appendFilteredShows(res?.data?.page?.["content-items"]?.content || [])
        )
        dispatch(appendShows(res?.data?.page?.["content-items"]?.content || []))
      } else {
        dispatch(
          setFilteredShows(res?.data?.page?.["content-items"]?.content || [])
        )
        dispatch(setAllShows(res?.data?.page?.["content-items"]?.content || []))
      }
    })
    .catch((e) => {
      console.error(e.message)
      dispatch(setHasMoreData(false))
    })
    .finally(() => {
      if (cb instanceof Function) {
        cb()
      }
    })
}

export default shows.reducer
