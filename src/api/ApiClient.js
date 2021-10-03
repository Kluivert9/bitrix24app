export default class ApiClient {
  static init() {
    BX24.init(() => console.log('api initialization started'))
  }

  call(method, options, callback) {
    return new Promise((resolve, reject) => {
      BX24.callMethod(method, options, result => {
        if(!result.error())
        {
          callback && callback(result)
          resolve(result)
        }
        else
        {
          reject(result.error())
        }
      })
    })
  }
}
