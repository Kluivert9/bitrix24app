import ApiClient from './ApiClient'
import { LISTS_METHODS } from '../common/methodReference'
import BX24Wrapper from './entities'

class ListsApi extends ApiClient {
  listsGet(options = {}, callback = null) {
    return this.call(LISTS_METHODS.LISTS_GET, options, callback)
  }

  listElementGet(options = {}, setProgress) {
    BX24Wrapper.batchSize = 50
    BX24Wrapper.throttle = 100
    BX24Wrapper.progress = setProgress

    return BX24Wrapper.callListMethod(LISTS_METHODS.LIST_ELEMENT_GET, options)
  }
}

export default new ListsApi()