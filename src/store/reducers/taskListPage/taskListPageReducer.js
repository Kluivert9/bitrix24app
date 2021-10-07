import { types } from './actions'


export const initialState = {
  parentEntityData: {},
  elementList: [],
}

export function taskListPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_PARENT_ENTITY_DATA:
      return {
        ...state,
        parentEntityData: payload
      }
    case types.SET_LIST_ELEMENT:
      return {
        ...state,
        elementList: payload
      }
    case types.CLEAR_TASK_LIST_PAGE_STORE:
      return payload
    default:
      return state
  }
}