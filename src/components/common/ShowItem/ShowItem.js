import React from "react"
import { BASE_URL } from "../../../utils/constants"
import "./styles.scss"

const ShowItem = ({ showData }) => {
  return (
    <div className="show-item">
      <img
        src={`${BASE_URL}/images/${showData?.["poster-image"]}`}
        alt={showData.name}
      />
      <div className="show-title">{showData?.name}</div>
    </div>
  )
}

export default ShowItem
