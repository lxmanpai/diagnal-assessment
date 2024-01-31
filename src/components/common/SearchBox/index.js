import React, { useRef, useCallback } from "react"
import debounce from "lodash.debounce"
import { useDispatch, useSelector } from "react-redux"

import { setFilteredShows, setSearchQuery } from "../../../reducers/showsSlice"
import { searchShows } from "../../../utils/helpers"
import { IMAGE_BASE_URL, SEARCH_DEBOUNCE } from "../../../utils/constants"

import "./styles.scss"

const SearchBox = () => {
  const dispatch = useDispatch()
  const { allShows } = useSelector((state) => state.shows)
  const inputRef = useRef(null)

  const handleSearchClick = () => {
    inputRef.current.classList.add("toggle")
  }

  const debounceFn = useCallback(
    debounce((inputValue) => {
      handleSearch(inputValue)
    }, SEARCH_DEBOUNCE),
    []
  )

  const handleOnBlur = () => {
    if (inputRef?.current?.classList?.contains("toggle")) {
      inputRef.current.classList.remove("toggle")
    }
  }

  const handleChange = (e) => debounceFn(e.target.value)

  const handleSearch = (query) => {
    dispatch(setSearchQuery(query))
    dispatch(setFilteredShows(searchShows(allShows, query)))
  }

  return (
    <div className="search">
      <input
        ref={inputRef}
        className="input"
        type="text"
        placeholder="Titles, people, genres"
        onBlur={handleOnBlur}
        onChange={handleChange}
      />
      <img
        className="search-icon"
        width={18}
        height={18}
        src={`${IMAGE_BASE_URL}/search.png`}
        alt="Search"
        onClick={() => handleSearchClick()}
        onBlur={handleOnBlur}
      />
    </div>
  )
}

export default SearchBox
