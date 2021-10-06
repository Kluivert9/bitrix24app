import React, { useEffect } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import 'react-notifications/lib/notifications.css'

export default function Notification({ notyObj }) {
  const {
    type,
    title,
    message,
    delay,
    callback
  } = notyObj

  useEffect(() => {
    switch (type) {
      case 'info':
        NotificationManager.info(message, title, delay, callback && callback)
        break
      case 'success':
        NotificationManager.success(message, title, delay, callback && callback)
        break
      case 'warning':
        NotificationManager.warning(message, title, delay, callback && callback)
        break
      case 'error':
        NotificationManager.error(message, title, delay, callback && callback)
        break
    }
  }, [notyObj])

  return (
    <NotificationContainer />
  )
}
