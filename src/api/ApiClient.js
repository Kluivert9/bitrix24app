import { getQueryString } from './helpers'

export default class ApiClient {
  static init() {
    BX24.init(() => console.log('api initialization started'))
  }

  call(method, options, callback) {
    return new Promise((resolve, reject) => {
      BX24.callMethod(method, options, result => {
        if(!result.error()) {
          callback && callback(result.data())
          resolve(result.data())
        } else {
          reject(result.error())
        }
      })
    })
  }

  callWithStart(method, options, callback) {
    let queryString = getQueryString(method, options)

    return new Promise((resolve, reject) => {
      BX24.callMethod('batch', {
          'halt': 0,
          'cmd': { 'cmd': queryString }
        },
        result => {
          if(!result.error()) {
            callback && callback(result.data())
            resolve(result.data())
          } else {
            reject(result.error())
          }
        }
      )
    })
  }
}
