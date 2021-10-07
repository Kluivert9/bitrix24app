import { createSelector } from 'reselect'

export const getCurrentUser = state => state.appReducer.currentUser
export const getCurrentPage = state => state.appReducer.currentPage
export const getNotificationObj = state => state.appReducer.notification

const getLoader = state => state.appReducer.loader
export const getVisibleLoaderFlag = createSelector(getLoader, getLoader => getLoader.count > 0)
