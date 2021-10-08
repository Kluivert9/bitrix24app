import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchListElement, clearTaskListPageStore } from '../../../store/reducers/taskListPage/actions'
import { getParentEntityData, getElementList } from '../../../store/reducers/taskListPage/selectors'
import { getCurrentUser } from '../../../store/reducers/app/selectors'

export default function TaskListPage() {
  const dispatch = useDispatch()
  const { ID: id } = useSelector(getParentEntityData)
  const { data: { answer: { result: { ID: userId } } } } = useSelector(getCurrentUser)
  const elementList = useSelector(getElementList)

  useEffect(() => {
    dispatch(fetchListElement(id, userId))

    return () => dispatch(clearTaskListPageStore())
  }, [])

  useEffect(() => console.log('elementList', elementList), [elementList])

  return (
    <p>TaskListPage</p>
  )
}
