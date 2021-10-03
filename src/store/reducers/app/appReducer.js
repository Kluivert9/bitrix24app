import { types } from './actions'
import { descriptionOfPages } from '../../../common/descriptionOfPages'

export const initialState = {
  currentUser: {
    name: '',
    data: {}
  },
  currentPage: descriptionOfPages.MAIN_PAGE.name
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
    default:
      return state
  }
}