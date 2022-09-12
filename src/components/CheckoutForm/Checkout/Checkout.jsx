import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles';
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import "./Checkout.css"

const steps = ['Shipping address', 'Payment details']

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles()

  const incrementCount = () => {
    if (activeStep < 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const decrementCount = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const Confirmation = () => (
    <div>
        Your order has been processed. Thank you!
    </div>
)

  const Form = () => activeStep === 0
    ? <AddressForm />
    : <PaymentForm />

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
            <Typography variant='h4' align='center'>Checkout</Typography>
            { activeStep === steps.length ? <Confirmation/> : <Form /> }
            <div className="button-div">
              <button className={activeStep == 0 ? "active" : "deactive"} onClick={decrementCount}>Back</button>
              <button className={activeStep == 1 ? "active" : "deactive"} onClick={incrementCount}>Continue</button>
            </div>
        </Paper>
      </main>
    </>
  )
}

export default Checkout