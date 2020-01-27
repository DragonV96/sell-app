export function formatDate(date, format) {
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let i in obj) {
    if (new RegExp(`(${i})`).test(format)) {
      let str = obj[i] + '';
      format = format.replace(RegExp.$1, (RegExp.$1.length) === 1 ? str : padLeftZero(str));
    }
  }
  return format;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
