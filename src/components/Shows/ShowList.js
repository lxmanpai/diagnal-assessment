import React from "react"
import { useSelector } from "react-redux"
import "./styles.scss"
import ShowItem from "../common/ShowItem/ShowItem"

const ShowsList = () => {
  const { allShows } = useSelector((state) => state.shows)

  return (
    <div className="show-list-wrapper">
      {allShows.map((show) => (
        <ShowItem showData={show} />
      ))}
    </div>
  )
}

export default ShowsList
