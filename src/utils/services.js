export function prefixBaseURL(urls, baseURL) {
  return Object.keys(urls).reduce((prefixedURLs, key) => {
    prefixedURLs[key] = baseURL + urls[key]
    return prefixedURLs
  }, {})
}
