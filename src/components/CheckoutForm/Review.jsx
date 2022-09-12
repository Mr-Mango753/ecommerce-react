import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import "./Review.css"


const Review = () => {
  let local = localStorage.getItem('cart')
  let cartLocal = JSON.parse(local)

  let a = 0
  cartLocal.forEach(addTotal)

  function addTotal(item) {
    a += parseFloat(item.price)
  }

  return (
    <>
      <h1 className="order" variant='h6' gutterBottom>Order Summary</h1>
      <List disablePadding>
      {cartLocal.map((item) => (
                <Typography item xs={12} sm={4} key={item.id}>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                </Typography>
            ))}
      <h3 className="total">Total: {a.toFixed(2)}</h3>
      </List>
    </>
  )
}

export default Review