import React from "react"

import { IMAGE_BASE_URL, SHOW_PAGE_TITLE } from "../../../utils/constants"

import "./styles.scss"
import SearchBox from "../SearchBox"

const Header = () => (
  <div className="page-header">
    <img
      className="header-icon"
      width={18}
      height={18}
      src={`${IMAGE_BASE_URL}/Back.png`}
      alt="Search"
    />
    <div className="page-title">{SHOW_PAGE_TITLE}</div>
    <SearchBox />
  </div>
)

export default Header
