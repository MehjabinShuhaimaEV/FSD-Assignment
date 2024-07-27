import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
      <Typography variant='h4' component='div' sx={{flexGrow:1}}>Product</Typography>
      <Link to="/home"><Button variant="contained">HOME</Button></Link>&nbsp;&nbsp;
      <Link to="/add"><Button variant="contained" >ADD</Button></Link>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar