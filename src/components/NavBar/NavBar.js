import React from 'react'
import { useDispatch } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SettingsIcon from '@mui/icons-material/Settings'

import { descriptionOfPages } from '../../common/descriptionOfPages'
import { setCurrentPage } from '../../store/reducers/app/actions'

import './navbar.css'

export default function NavBar({ name, page }) {
  const dispatch = useDispatch()

  const onClickButtonHandler = page => { dispatch(setCurrentPage(page)) }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" className="app_navbar">
        <Toolbar>
          {
            page === descriptionOfPages.MAIN_PAGE.name
              ? <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="back"
                  sx={{ mr: 2 }}
                  onClick={() => onClickButtonHandler(descriptionOfPages.SETTINGS_PAGE.name)}
                >
                  <SettingsIcon />
                </IconButton>
              : <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="back"
                  sx={{ mr: 2 }}
                  onClick={() => onClickButtonHandler(descriptionOfPages.MAIN_PAGE.name)}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
          }

          <Box sx={{ flexGrow: 1 }} />
          <Typography>{name}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  )
}
