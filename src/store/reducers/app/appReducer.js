import { types } from './actions'
import { descriptionOfPages } from '../../../common/descriptionOfPages'

export const initialState = {
  currentUser: {
    name: '',
    data: {}
  },
  notification: {
    type: '',
    title: '',
    message: '',
    delay: 0,
    callback: null
  },
  currentPage: descriptionOfPages.MAIN_PAGE.name,
  loader: {
    count: 0,
    progress: '0%'
  }
}

export function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_CURRENT_USER_PROPS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          [payload.propName]: payload.propValue
        }
      }
    case types.SET_CURRENT_PAGE:
      return  {
        ...state,
        currentPage: payload.page
      }
    case types.SET_LOADER_PROPS:
      return {
        ...state,
        loader: {
          ...state.loader,
          [payload.propName]: payload.propValue
        }
      }
    case types.SHOW_NOTIFICATION:
      return {
        ...state,
        notification: payload
      }
    default:
      return state
  }
}
