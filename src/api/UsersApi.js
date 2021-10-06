import ApiClient from './ApiClient'
import { USERS_METHODS } from '../common/methodReference'

class UsersApi extends ApiClient {
  userCurrent(options = {}, callback = null) {
    return this.call(USERS_METHODS.USER_CURRENT, options, callback)
  }
}

export default new UsersApi()
