import { createSelector } from 'reselect'

export const getCurrentUser = state => state.appReducer.currentUser
export const getCurrentPage = state => state.appReducer.currentPage
export const getNotificationObj = state => state.appReducer.notification

const getLoaderCount = state => state.appReducer.loaderCount
export const getVisibleLoaderFlag = createSelector(getLoaderCount, count => count > 0)
