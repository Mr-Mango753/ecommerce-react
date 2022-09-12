import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles'


const CartItem = ({ item }) => {
  const classes = useStyles()

  let local = localStorage.getItem('cart')
  let cartLocal = JSON.parse(local)

  return (
    <Card>
        <CardMedia image={item.imageURL} alt={item.name} className={classes.media} />
        <CardContent classname={classes.cardContent}>
            <Typography variant='h5'>{item.price}</Typography>
        </CardContent>
    </Card>
  )
}

export default CartItem