import React from "react"
import { useSelector } from "react-redux"

import ShowItem from "../common/ShowItem/ShowItem"
import Loader from "../../assets/loader.svg"

import "./styles.scss"

const ShowsList = ({ loading }) => {
  const { filteredShows, searchQuery } = useSelector((state) => state.shows)

  return (
    <>
      {searchQuery?.trim()?.length > 0 && !filteredShows?.length && (
        <div className="no-results">No results found.</div>
      )}
      {filteredShows?.length > 0 && (
        <div className="show-list-wrapper">
          {filteredShows.map((show) => (
            <ShowItem showData={show} />
          ))}
        </div>
      )}
      {loading && (
        <div className="loader-wrapper">
          <img src={Loader} alt="Loading..." />
        </div>
      )}
    </>
  )
}

export default ShowsList
