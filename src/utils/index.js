function getUrl(url, name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = url.split('?')[1] && url.split('?')[1].match(reg)
  if (r != null) { return decodeURI(r[2]) }
  return null
}
const setCookie = (name, value, host, expiredays) => {
  const exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  let cookie = name + '=' + escape(value)  + (!expiredays ? '' : '; expires=' + exdate.toGMTString())
  if (host !== '') {
    cookie += `;domain=${host};path=/`
  }
  document.cookie = cookie
}
function getCookie(name) {
  let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}
function checkCookie(name){
	if(getCookie(name) == null || getCookie(name)=="" || getCookie(name)=="null" || typeof(getCookie(name))=="undefined" || getCookie(name)==false || getCookie(name) == undefined){
		return false;
	}else{
		return true;
	}
}
export {
  getUrl,
  setCookie,
  getCookie,
  checkCookie
}
