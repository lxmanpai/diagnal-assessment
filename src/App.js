import React, { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

import Shows from "./components/Shows"
import { setFetching } from "./reducers/showsSlice"

import "./App.scss"

const App = () => {
  const { fetching } = useSelector((state) => state.shows)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!fetching) {
      axios.interceptors.request.use((config) => {
        dispatch(setFetching(true))
        return config
      })
      axios.interceptors.response.use(
        (response) => response,
        (error) => Promise.reject(error)
      )
    }
  }, [fetching])
  return <Shows />
}

export default App
