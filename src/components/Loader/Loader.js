import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import './loader.css'

export default function Loader({ progress = null }) {
  return (
    <Box className="loader_wrap">
      {progress ? progress : <CircularProgress />}
    </Box>
  )
}
