export const pixToRem = (pixels) => {
  const htmlElementFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize,
  )

  return pixels / htmlElementFontSize
}
