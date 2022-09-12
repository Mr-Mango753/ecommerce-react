import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

const stripePromise = loadStripe('...');

const PaymentForm = () => {
  let local = localStorage.getItem('cart')
  let cartLocal = JSON.parse(local)

  let a = 0
  cartLocal.forEach(addTotal)

  function addTotal(item) {
    a += parseFloat(item.price)
  }

  const alertOrder = () => {
    alert("Your order has been processed. Thank you!")
  }
  // {a.toFixed(2)}

  return (
    <>
      <Review />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form>
              <CardElement />
              <br />
              <div style={{ display: 'flex', justifyContent:'space-between'}}>
                <Button type='submit' onClick={alertOrder} variant='contained'  color='primary'>
                  Pay 
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentForm