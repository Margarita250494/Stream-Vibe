import { getAttrNameFromSelector } from "@/utils/getAttrNameFromSelector"

export const getParams = (element, dataAttrSelector) => {
  return JSON.parse(
    element.getAttribute(getAttrNameFromSelector(dataAttrSelector)),
  )
}
