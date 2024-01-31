import React from "react"
import { useSelector } from "react-redux"

import ShowItem from "../common/ShowItem/ShowItem"
import Loader from "../../assets/loader.svg"

import "./styles.scss"

// Listing component for shows where all show items are rendered
const ShowsList = ({ loading }) => {
  const { filteredShows, searchQuery } = useSelector((state) => state.shows)

  return (
    <>
      {/* If search query has input and no results found then show empty message */}
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
      {/* Loading animation when fetching next page data */}
      {loading && (
        <div className="loader-wrapper">
          <img src={Loader} alt="Loading..." />
        </div>
      )}
    </>
  )
}

export default ShowsList
