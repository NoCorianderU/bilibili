
const axios = require('axios')

export function getUrl() {
 return new Promise( (resolve, reject) => {
  axios({
    method: 'get',
    url: 'http://localhost:3000/demo',
    // params: {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // }
  }).then((res) => {
    resolve(res.data)
  })
  .catch((err) => {
    reject(err)
   })
  })
}

export function setCookie(cname,cvalue,exdays){
  let d = new Date()
  d.setTime(d.getTime()+(exdays*24*60*60*1000))
  let expires = "expires="+d.toGMTString()
  document.cookie = cname+"="+cvalue+"; "+expires+";path=/"
}

export function getCookie(cname){
  let name = cname + "="
  let ca = document.cookie.split(';')
  for(let i=0; i<ca.length; i++) {
      let c = ca[i].trim()
      if (c.indexOf(name)==0) {
        return c.substring(name.length,c.length);
      }
  }
  return "";
}

export function checkCookie(cname){
  let user = getCookie(cname)
  if (!user.length){
      return false
  } else {
    return user
  }
}

export function delCookie(cname){
  let date = new Date();
  date.setTime(date.getTime() - 100000);
  document.cookie = cname + "=a; expires=" + date.toGMTString();
}
