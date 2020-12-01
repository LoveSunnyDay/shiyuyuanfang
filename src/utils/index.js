function getUrl(url, name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  console.log('url', url)
  const r = url.split('?')[1] && url.split('?')[1].match(reg)
  //    var r = url.split(name+"=")[1].split("!")[0];
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
export {
  getUrl,
  setCookie
}
