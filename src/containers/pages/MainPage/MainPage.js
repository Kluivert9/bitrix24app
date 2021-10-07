import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'

import { fetchLists, clearMainPageStore } from '../../../store/reducers/mainPage/actions'
import { setParentEntityData } from '../../../store/reducers/taskListPage/actions'
import { setCurrentPage } from '../../../store/reducers/app/actions'
import { getLists } from '../../../store/reducers/mainPage/selectors'
import EntitiesCard from '../../../components/EntitiesCard'
import { descriptionOfPages } from '../../../common/descriptionOfPages'

import './mainPage.css'

export default function MainPage() {
  const dispatch = useDispatch()
  const { listsEntities } = useSelector(getLists)

  useEffect(() => {
    dispatch(fetchLists())

    return () => dispatch(clearMainPageStore())
  }, [])

  const taskListPageClickHandler = entity => {
    dispatch(setParentEntityData(entity))
    dispatch(setCurrentPage(descriptionOfPages.TASK_LIST_PAGE.name))
  }

  return (
    <Box className="main_page_wrap">
      {
        listsEntities.map(entity =>  <EntitiesCard
            key={entity.ID}
            entity={entity}
            taskListPageClick={taskListPageClickHandler}
          />
        )
      }
    </Box>
  )
}
