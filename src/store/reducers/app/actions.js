import UsersApi from '../../../api/UsersApi'

export const types = {
  SET_CURRENT_USER_PROPS: 'app/SET_CURRENT_USER_PROPS',
  SET_CURRENT_PAGE: 'app/SET_CURRENT_PAGE',
  SET_LOADER_PROPS: 'app/SET_LOADER_PROPS',
  SHOW_NOTIFICATION: 'app/SHOW_NOTIFICATION'
}

export const fetchCurrentUser = () => async dispatch => {
  try {
    dispatch(showLoader(true))
    const data = await UsersApi.userCurrent()
    dispatch(setCurrentUserProps('name', `${data.answer.result.NAME}`))
    dispatch(setCurrentUserProps('data', data))
    dispatch(showLoader(false))
  } catch (e) {
    console.error(e)
    const { ex: { error: title, error_description: message } } = e
    dispatch(showLoader(false))
    dispatch(showNotification('error', message, title))
  }

}

export const setCurrentUserProps = (propName, propValue) => {
  return {
    type: types.SET_CURRENT_USER_PROPS,
    payload: { propName, propValue }
  }
}

export const setCurrentPage = page => {
  return {
    type: types.SET_CURRENT_PAGE,
    payload: { page }
  }
}

export const showLoader = flag => (dispatch, getState) => {
  let { count } = getState().appReducer.loader

  if (flag) {
    dispatch({
      type: types.SET_LOADER_PROPS,
      payload: { propName: 'count', propValue: ++count }
    })
  } else {
    dispatch({
      type: types.SET_LOADER_PROPS,
      payload: { propName: 'count', propValue: --count }
    })
  }
}

export const setLoaderProgress = progress => {
  return {
    type: types.SET_LOADER_PROPS,
    payload: { propName: 'progress' ,propValue: `${progress}%` }
  }
}

export const showNotification = (type, message, title = '', delay = 3000, callback = null) => {
  return {
    type: types.SHOW_NOTIFICATION,
    payload: { type, title, message, delay, callback }
  }
}
