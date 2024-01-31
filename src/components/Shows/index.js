import React, { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import ShowsList from "./ShowList"
import Header from "../common/Header"
import { getShowsList, setPageNo } from "../../reducers/showsSlice"

import "./styles.scss"

const Shows = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { pageNo, hasMoreData, searchQuery } = useSelector(
    (state) => state.shows
  )

  const listInnerRef = useRef(null)

  useEffect(() => {
    dispatch(getShowsList(pageNo, () => setLoading(false)))
  }, [])

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (
        Math.abs(scrollHeight - (scrollTop + clientHeight)) <= 1 &&
        hasMoreData &&
        searchQuery?.trim().length === 0
      ) {
        setLoading(true)
        dispatch(getShowsList(pageNo + 1, () => setLoading(false)))
        dispatch(setPageNo(pageNo + 1))
      }
    }
  }

  return (
    <section className="list-wrapper" onScroll={onScroll} ref={listInnerRef}>
      <Header />
      <ShowsList loading={loading} />
    </section>
  )
}

export default Shows
