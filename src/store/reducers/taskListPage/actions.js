import ListsApi from '../../../api/ListsApi'
import { showNotification, setLoaderProgress, showLoader } from '../app/actions'
import { initialState } from './taskListPageReducer'

export const types = {
  SET_PARENT_ENTITY_DATA: 'taskListPage/SET_PARENT_ENTITY_DATA',
  SET_LIST_ELEMENT: 'taskListPage/SET_LIST_ELEMENT',
  CLEAR_TASK_LIST_PAGE_STORE: 'taskListPage/CLEAR_TASK_LIST_PAGE_STORE'
}

export const setParentEntityData = value => {
  return {
    type: types.SET_PARENT_ENTITY_DATA,
    payload: value
  }
}

export const fetchListElement = (id, userId) => async dispatch => {
  try {
    dispatch(showLoader(true))
    const data = await ListsApi.listElementGet({
      IBLOCK_TYPE_ID: 'bitrix_processes',
      IBLOCK_ID: id,
      /*FILTER: { CREATED_USER_ID : userId},*/
      start: 0
    })
    dispatch(showLoader(false))
    dispatch(setListElement(data))
  } catch (e) {
    dispatch(showLoader(false))
    console.error(e)
    dispatch(setLoaderProgress(0))
    const { ex: { error: title, error_description: message } } = e
    dispatch(showNotification('error', message, title))
  }
}

export const setListElement = list => {
  return {
    type: types.SET_LIST_ELEMENT,
    payload: list
  }
}

export const clearTaskListPageStore = () => {
  return {
    type: types.CLEAR_TASK_LIST_PAGE_STORE,
    payload: initialState
  }
}
