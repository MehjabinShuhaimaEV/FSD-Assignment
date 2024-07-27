import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <Typography variant='h4'>Add Products</Typography><br/><br/>
        <TextField id="outlined-basic" label="Product Name" variant="outlined" /><br/>
        <TextField id="outlined-basic" label="Image URL" variant="outlined" /><br/>
        <TextField id="outlined-basic" label="Price" variant="outlined" /><br/>
        <FormControl sx={{ m: 1, minWidth: 210 }}> 
  <InputLabel id="cat">Category</InputLabel>
  <Select
    labelId="cat"
    id="cat"
    label="Category"
  >
    <MenuItem value={"men's clothing"}>Men's clothing</MenuItem>
    <MenuItem value={"jewelery"}>Jewelery</MenuItem>
    <MenuItem value={"electronics"}>Electronics</MenuItem>
  </Select>
</FormControl><br/><br/>
<Button>ADD</Button>


    </div>
  )
}

export default Add