import { Box, Typography } from '@mui/material'
import React from 'react'

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'black',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        <p>Oh, API Requests Have been exceeded!</p>
        Back soon!
      </Typography>
    </Box>
  );
}

export default ErrorPage