module.exports = function (xPaths, urlPath, req) {
  let page_path
  if (urlPath == '/') {
    page_path = req.path
  } else {
    page_path = req.path.replace(urlPath, '')
  }
  for (let i = 0; i < xPaths.length; i++) {
    if (page_path.startsWith(xPaths[i])) {
      return false
    }
  }
  return true
}
