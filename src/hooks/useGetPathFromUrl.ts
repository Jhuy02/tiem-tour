export const getPathFromUrl = (url: string): string => {
  if (!url || url === '#') return url
  try {
    const urlObj = new URL(url)
    return urlObj.pathname
  } catch {
    return url
  }
}
