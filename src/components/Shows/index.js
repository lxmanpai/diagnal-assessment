import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import ShowsList from "./ShowList"
import Header from "../common/Header"
import { getShowsList } from "../../reducers/showsSlice"
import useInfiniteScroll from "../../hooks/useInfiniteScroll"

import "./styles.scss"

const Shows = () => {
  const dispatch = useDispatch()
  const { pageNo } = useSelector((state) => state.shows)
  const [fetching, setFetching] = useInfiniteScroll(() =>
    console.log("Reached Bottom!")
  )

  useEffect(() => {
    dispatch(getShowsList(pageNo, setFetching(false)))
  }, [])

  return (
    <section className="list-wrapper">
      <Header />
      <ShowsList />
      {fetching && <>Loading...</>}
    </section>
  )
}

export default Shows
