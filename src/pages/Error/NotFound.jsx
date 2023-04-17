import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
  return (
        <div className='container bg-light'>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
                <Stack spacing={5}>
                    <Typography variant='h3' >Trang này không tồn tại</Typography>
                    <Button variant="contained" onClick={onClick}>Quay về trang chủ</Button>
                </Stack>
            </Box>
        </div>
  )
}

export default NotFound