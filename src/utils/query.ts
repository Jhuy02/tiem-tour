export const updateURLWithoutRender = (
  pathname: string,
  params: URLSearchParams,
) => {
  window.history.pushState({}, '', `${pathname}?${params.toString()}`)
}
