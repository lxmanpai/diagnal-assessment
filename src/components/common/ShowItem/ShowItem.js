import React from "react"

import { FALLBACK_POSTER_URL, IMAGE_BASE_URL } from "../../../utils/constants"

import "./styles.scss"

// Component for reusable individual show UI
const ShowItem = ({ showData }) => {
  const onImageError = (e) => {
    e.target.onError = null
    e.target.src = FALLBACK_POSTER_URL
  }

  return (
    <div className="show-item">
      <img
        src={`${IMAGE_BASE_URL}/${showData?.["poster-image"]}`}
        // Handle cases where thumbnail fails to load
        onError={onImageError}
        alt={showData.name}
        loading="lazy"
      />
      <div className="show-title">{showData?.name}</div>
    </div>
  )
}

export default ShowItem
