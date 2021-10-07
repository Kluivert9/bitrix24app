import ListsApi from '../../../api/ListsApi'
import { showLoader, showNotification } from '../app/actions'
import { initialState } from './mainPageReducer'

export const types = {
  SET_LISTS_PROPS: 'mainPage/SET_LISTS_PROPS',
  CLEAR_MAIN_PAGE_STORE: 'mainPage/CLEAR_MAIN_PAGE_STORE'
}

export const fetchLists = () => async dispatch => {
  try {
    dispatch(showLoader(true))
    const data = await ListsApi.listsGet({'IBLOCK_TYPE_ID': 'bitrix_processes'})
    dispatch(setLists('listsEntities', data.answer.result))
    dispatch(showLoader(false))
  } catch (e) {
    console.error(e)
    dispatch(showLoader(false))
    const { ex: { error: title, error_description: message } } = e
    dispatch(showNotification('error', message, title))
  }
}

export const setLists = (propName, propValue) => {
  return {
    type: types.SET_LISTS_PROPS,
    payload: { propName, propValue }
  }
}

export const clearMainPageStore = () => {
  return {
    type: types.CLEAR_MAIN_PAGE_STORE,
    payload: initialState
  }
}
