import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import './loader.css'

export default function Loader() {
  return (
    <Box className="loader_wrap">
      <CircularProgress />
    </Box>
  )
}
