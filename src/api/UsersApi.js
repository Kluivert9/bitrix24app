import ApiClient from './ApiClient'
import { USERS_METODS } from '../common/methodReference'

class UsersApi extends ApiClient {
  getCurrentUser(options = {}, callback = null) {
    return this.call(USERS_METODS.USER_CURRENT, options, callback)
  }
}

export default new UsersApi()
