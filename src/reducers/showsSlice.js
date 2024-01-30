import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../utils/constants"

export const shows = createSlice({
  name: "shows",
  initialState: {
    pageNo: 1,
    allShows: [],
    fetching: false,
  },
  reducers: {
    setPageNo(state, action) {
      state.pageNo = action.payload
    },
    setAllShows(state, action) {
      state.allShows = action.payload
    },
    setFetching(state, action) {
      state.fetching = action.payload
    },
  },
})

export const { setAllShows, setPageNo, setFetching } = shows.actions

export const getShowsList = (pageNo, cb) => (dispatch) => {
  const showURL = `${BASE_URL}/data/page${pageNo}.json`
  axios.get(showURL).then((res) => {
    if (cb instanceof Function) {
      cb()
    }
    dispatch(setAllShows(res?.data?.page?.["content-items"]?.content || []))
  })
}

export default shows.reducer
