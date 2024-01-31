// Filter shows on UI based on search query
export const searchShows = (allShows, query) => {
  const searchExp = new RegExp(query, "gi")
  return allShows?.filter((elem) => searchExp.test(elem.name))
}
