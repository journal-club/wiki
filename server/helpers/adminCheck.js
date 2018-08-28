module.exports = function (rt_array) {
  let isAdmin = rt_array.find(function (item) {
    return (item.role === 'admin')
  })
  return isAdmin
}
