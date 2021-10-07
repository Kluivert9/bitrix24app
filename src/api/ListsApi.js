import ApiClient from './ApiClient'
import { LISTS_METHODS } from '../common/methodReference'
import BX24Wrapper from './entities'

class ListsApi extends ApiClient {
  listsGet(options = {}, callback = null) {
    return this.call(LISTS_METHODS.LISTS_GET, options, callback)
  }

  listElementGet(options = {}, callback = null) {
    BX24Wrapper.batchSize = 50
    BX24Wrapper.throttle = 100
    BX24Wrapper.progress = percent => console.log(`Progress: ${percent}%`);

    return BX24Wrapper.callListMethod(LISTS_METHODS.LIST_ELEMENT_GET, options);
    //return this.call(LISTS_METHODS.LIST_ELEMENT_GET, options, callback)
  }
}

export default new ListsApi()