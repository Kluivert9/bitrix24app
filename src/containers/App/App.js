import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ApiClient from '../../api/ApiClient'
import {
  getCurrentUser,
  getCurrentPage,
  getVisibleLoaderFlag,
  getNotificationObj,
} from '../../store/reducers/app/selectors'
import { fetchCurrentUser } from '../../store/reducers/app/actions'
import MainPage from '../pages/MainPage'
import CurrentRequestPage from '../pages/CurrentRequestPage'
import NewRequestPage from '../pages/NewRequestPage'
import SettingsPage from '../pages/SettingsPage'
import TaskListPage from '../pages/TaskListPage'
import Loader from '../../components/Loader'
import Notification from '../../components/Notification'
import NavBar from '../../components/NavBar'
import { descriptionOfPages } from '../../common/descriptionOfPages'

import './app.css'

const pages = {
  [descriptionOfPages.MAIN_PAGE.name]: MainPage,
  [descriptionOfPages.CURRENT_REQUEST_PAGE.name]: CurrentRequestPage,
  [descriptionOfPages.NEW_REQUEST_PAGE.name]: NewRequestPage,
  [descriptionOfPages.SETTINGS_PAGE.name]: SettingsPage,
  [descriptionOfPages.TASK_LIST_PAGE.name]: TaskListPage,
}

export default function App() {
  const { name } = useSelector(getCurrentUser)
  const currentPage = useSelector(getCurrentPage)
  const showLoaderFlag = useSelector(getVisibleLoaderFlag)
  const notyObj = useSelector(getNotificationObj)
  const dispatch = useDispatch()

  useEffect(() => {
    ApiClient.init()
    dispatch(fetchCurrentUser())
  }, [])

  const CurrentPageComponent = useMemo(() => pages[currentPage], [currentPage])

  return (
    <div className="app_wrap">
      <NavBar name={name} page={currentPage}/>
      <CurrentPageComponent />
      {showLoaderFlag && <Loader />}
      <Notification notyObj={notyObj} />
    </div>
  )
}
