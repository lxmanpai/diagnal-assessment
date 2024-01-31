import React, { useRef, useCallback, useEffect } from "react"
import debounce from "lodash.debounce"
import { useDispatch, useSelector } from "react-redux"

import { setFilteredShows, setSearchQuery } from "../../../reducers/showsSlice"
import { searchShows } from "../../../utils/helpers"
import { IMAGE_BASE_URL, SEARCH_DEBOUNCE } from "../../../utils/constants"

import "./styles.scss"

//Search box component for shows screen
const SearchBox = () => {
  const dispatch = useDispatch()
  const { allShows } = useSelector((state) => state.shows)
  const inputRef = useRef(null)
  const showsRef = useRef(null)

  const handleSearchClick = () => {
    inputRef.current.classList.add("toggle")
  }

  useEffect(() => {
    showsRef.current = allShows
  }, [allShows])

  // Debounce UI search by 0.4 seconds
  const debounceFn = useCallback(
    debounce((inputValue) => {
      handleSearch(inputValue)
    }, SEARCH_DEBOUNCE),
    []
  )

  // On click outside of search input
  const handleOnBlur = () => {
    if (inputRef?.current?.classList?.contains("toggle")) {
      inputRef.current.classList.remove("toggle")
    }
  }

  const handleChange = (e) => debounceFn(e.target.value)

  // Function that filters the data based on search query post debounce
  const handleSearch = (query) => {
    dispatch(setSearchQuery(query))
    dispatch(setFilteredShows(searchShows(showsRef.current, query)))
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
      />
    </div>
  )
}

export default SearchBox
