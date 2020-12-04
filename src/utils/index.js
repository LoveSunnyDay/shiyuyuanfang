function getUrl(url, name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = url.split('?')[1] && url.split('?')[1].match(reg)
  if (r != null) { return decodeURI(r[2]) }
  return null
}
const setCookie = (name, value, host, expiredays) => {
  const exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  let cookie = name + '=' + decodeURI(value) + (!expiredays ? '' : '; expires=' + exdate.toGMTString())
  if (host !== '') {
    cookie += `;domain=${host};path=/`
  }
  document.cookie = cookie
}
function getCookie(cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
  }
  return ''
}
export {
  getUrl,
  setCookie,
  getCookie
}
