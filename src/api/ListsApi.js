import ApiClient from './ApiClient'
import { LISTS_METHODS } from '../common/methodReference'

class ListsApi extends ApiClient {
  listsGet(options = {}, callback = null) {
    return this.call(LISTS_METHODS.LISTS_GET, options, callback)
  }
}

export default new ListsApi()