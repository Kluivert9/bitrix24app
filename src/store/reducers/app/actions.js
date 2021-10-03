import UsersApi from '../../../api/UsersApi'

export const types = {
  SET_CURRENT_USER_PROPS: 'app/SET_CURRENT_USER_PROPS',
  SET_CURRENT_PAGE: 'app/SET_CURRENT_PAGE'
}

export const fetchCurrentUser = () => async dispatch => {
  const data = await UsersApi.getCurrentUser()
  dispatch(setCurrentUserProps('name', `${data.answer.result.NAME}`))
  dispatch(setCurrentUserProps('data', data))
}

export const setCurrentUserProps = (propName, propValue) => {
  return {
    type: types.SET_CURRENT_USER_PROPS,
    payload: {propName, propValue}
  }
}

export const setCurrentPage = page => {
  return {
    type: types.SET_CURRENT_PAGE,
    payload: {page}
  }
}
