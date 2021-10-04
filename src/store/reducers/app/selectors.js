import { createSelector } from 'reselect'

export const getCurrentUser = state => state.appReducer.currentUser
export const getCurrentPage = state => state.appReducer.currentPage
const getLoaderCount = state => state.appReducer.loaderCount
export const getVisibleLoaderFlag = createSelector(getLoaderCount, count => count > 0)
