import React from "react"
import { FaArrowLeft, FaSistrix } from "react-icons/fa6"

import { SHOW_PAGE_TITLE } from "../../../utils/constants"

import "./styles.scss"

const Header = () => {
  return (
    <div className="page-header">
      <FaArrowLeft size="1.2rem" className="header-icon" />
      <div className="page-title">{SHOW_PAGE_TITLE}</div>
      <FaSistrix size="1.4rem" className="header-icon" />
    </div>
  )
}

export default Header
