import axios from 'axios'

const urlMap = {
  development: 'localhost:8099',
  production: '192.168.0.101/sell'
}

const baseUrl = urlMap[process.env.NODE_ENV]
const ERROR_OK = 0

export function get(url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === ERROR_OK) {
        return data
      }
    }).catch(() => {
    })
  }
}
