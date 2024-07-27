import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  var [product, setproduct] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response)
                setproduct(response.data)
            })
    }, [])
  return (
    <div>
        <Grid container spacing={5}>
                {product.map((val, i) => {
                    return (
                        <Grid item xs={10} sm={5} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.image}
                                    title={val.title}
                                    price={val.price}
                                    category={val.category}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {val.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.primary">
                                          Price: {val.price}<br />
                                    </Typography> 
                                </CardContent>
                            </Card>
                        </Grid>




                    )

                })}
            </Grid>
    </div>
  )
}

export default Home