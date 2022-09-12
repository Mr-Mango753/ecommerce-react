import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom'
import './Cart.css'
// import { renderMatches } from 'react-router-dom';


const Cart = ({ handleEmptyCart, cart }) => {
  const classes = useStyles();
  
  let local = localStorage.getItem('cart')
  let cartLocal = JSON.parse(local)
  
  let a = 0
  cartLocal.forEach(addTotal)

  function addTotal(item) {
    a += parseFloat(item.price)
  }
  
  const EmptyCart = (
    <Typography variant='subtitle1'> You have no items in your cart, start adding some!</Typography>
    )
  
  const FilledCart2 = (
    <>
        <Grid container spacing={3}>
            {cartLocal.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <h2>{item.name}</h2>
                    <CartItem item={item} />
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'>Subtotal={a.toFixed(2)}</Typography>
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={() => handleEmptyCart()}>Empty Cart</Button>
                <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
            </div>
        </div>
    </>
  )
  


  return (
    <div className='cart'>
        <Container>
            {/* { cartLocal == [] ? EmptyCart } */}
            <div className={classes.toolbar} /> 
            <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
            { FilledCart2 }
        </Container>
    </div>
  )
}

export default Cart