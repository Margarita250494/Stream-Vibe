import { getIdFromTitle } from "@/utils/getIdFromTitle"

export const getTabsElementsIdsFromTitle = (title) => {
  const cleanTitle = getIdFromTitle(title)

  return {
    buttonId: `${cleanTitle}-tab`,
    contentId: `${cleanTitle}-tabpanel`,
  }
}
