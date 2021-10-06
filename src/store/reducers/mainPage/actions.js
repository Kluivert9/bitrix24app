import ListsApi from '../../../api/ListsApi'
import { showLoader, showNotification } from '../app/actions'

export const types = {
  SET_LISTS_PROPS: 'mainPage/SET_LISTS_PROPS'
}

export const fetchLists = () => async dispatch => {
  try {
    dispatch(showLoader(true))
    const data = await ListsApi.listsGet({'IBLOCK_TYPE_ID': 'lists'})
    dispatch(setLists('listsEntities', data.answer.result))
    dispatch(showLoader(false))
  } catch (e) {
    console.error(e)
    const { ex: { error: title, error_description: message } } = e
    dispatch(showLoader(false))
    dispatch(showNotification('error', message, title))
  }
}

export const setLists = (propName, propValue) => {
  return {
    type: types.SET_LISTS_PROPS,
    payload: { propName, propValue }
  }
}
