import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ApiClient from '../../api/ApiClient'
import {
  getCurrentUser,
  getCurrentPage,
  getVisibleLoaderFlag,
  getNotificationObj,
} from '../../store/reducers/app/selectors'
import { fetchCurrentUser, setCurrentPage } from '../../store/reducers/app/actions'
import MainPage from '../pages/MainPage'
import CurrentRequestPage from '../pages/CurrentRequestPage'
import NewRequestPage from '../pages/NewRequestPage'
import SettingsPage from '../pages/SettingsPage'
import TaskListPage from '../pages/TaskListPage'
import Loader from '../../components/Loader'
import Notification from '../../components/Notification'
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
  const showLoader = useSelector(getVisibleLoaderFlag)
  const notyObj = useSelector(getNotificationObj)
  const dispatch = useDispatch()

  useEffect(() => {
    ApiClient.init()
    dispatch(fetchCurrentUser())
  }, [])

  const CurrentPageComponent = useMemo(() => pages[currentPage], [currentPage])

  return (
    <div className="app_wrap">
      Hello , {name}!
      <ul
        style={{
          margin: 0,
          padding: "4px",
          color: "tomato"
        }}
      >
        {Object.keys(descriptionOfPages).map(item => {
          return (
            <li
              style={{
                display: "inline",
                marginRight: "5px",
                border: "1px solid #000",
                padding: "3px",
                cursor: "pointer"
              }}
              key={item}
              onClick={() => dispatch(setCurrentPage(descriptionOfPages[item].name))}
            >
              {descriptionOfPages[item].title}
            </li>
          )
        })}
      </ul>
      <CurrentPageComponent />
      {showLoader && <Loader />}
      <Notification notyObj={notyObj} />
    </div>
  )
}
