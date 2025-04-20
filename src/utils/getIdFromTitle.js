export const getIdFromTitle = (title) => {
  return title.toLowerCase().replaceAll("", "-")
}
