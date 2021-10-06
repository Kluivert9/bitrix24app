import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'

import { showLoader, showNotification } from '../../../store/reducers/app/actions'

export default function MainPage() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(showLoader(true))
    setTimeout(() => dispatch(showLoader(false)), 1000)
  }

  const handleShowClick = () => {
    dispatch(showNotification('info', 'test test', 'Уведомление', 3000, () => console.log('test')))
  }

  return (
    <>
      <p>MainPage</p>
      <Button
        variant="outlined"
        onClick={handleClick}
      >
        Loader
      </Button>
      <Button
        variant="outlined"
        onClick={handleShowClick}
      >
        Notification
      </Button>
    </>
  )
}
