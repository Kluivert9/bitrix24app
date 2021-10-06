import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'

import { fetchLists } from '../../../store/reducers/mainPage/actions'
import { getLists } from '../../../store/reducers/mainPage/selectors'
import EntitiesCard from '../../../components/EntitiesCard'

import './mainPage.css'

export default function MainPage() {
  const dispatch = useDispatch()
  const { listsEntities } = useSelector(getLists)

  useEffect(() => {
    dispatch(fetchLists())
    //console.log('asd', document.querySelector('body').offsetWidth)
  }, [])

  return (
    <Box className="main_page_wrap">
      {listsEntities.map(entity => <EntitiesCard key={entity.ID} entity={entity}/>)}
    </Box>
  )
}
