import React from "react"

import {
  DIAGNAL_HOME,
  IMAGE_BASE_URL,
  SHOW_PAGE_TITLE,
} from "../../../utils/constants"

import "./styles.scss"
import SearchBox from "../SearchBox"

//Header component for shows screen
const Header = () => {
  const goBack = () => {
    window.location.href = DIAGNAL_HOME
  }
  return (
    <div className="page-header">
      <input
        type="image"
        width={18}
        height={18}
        src={`${IMAGE_BASE_URL}/Back.png`}
        alt="Back"
        onClick={goBack}
      />
      <div className="page-title">{SHOW_PAGE_TITLE}</div>
      <SearchBox />
    </div>
  )
}

export default Header
