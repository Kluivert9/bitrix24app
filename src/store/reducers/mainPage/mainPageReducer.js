import { types } from './actions'


export const initialState = {
  lists: {
    listsEntities: []
  }
}

export function mainPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_LISTS_PROPS:
      return {
        ...state,
        lists: {
          ...state.lists,
          [payload.propName]: payload.propValue
        }
      }
    case types.CLEAR_MAIN_PAGE_STORE:
      return payload
    default:
      return state
  }
}
