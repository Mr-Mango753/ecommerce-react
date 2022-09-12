import React from 'react'
import { Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form'


const AddressForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data)

  
  return (
    <>
        <Typography variant='h6' gutterBottom>Shipping Address</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className = "AddressForm">
                <input placeholder="First Name" {...register("firstName", { required: true, maxLength: 25 })} required/>
                <input placeholder="Last Name" {...register("lastName", { required: true, maxLength: 25 })} required/>
                <input placeholder="Email" {...register("email", { required: true, maxLength: 100 })} required/>
                <input placeholder="Address" {...register("address", { required: true, maxLength: 20 })} required/>
                <input placeholder="City" {...register("city", { required: true, maxLength: 20 })} required/>
                <input placeholder="State" {...register("state", { required: true, maxLength: 20 })} required/>
                <input placeholder="Zip" {...register("zip", { required: true, maxLength: 5 })} required/>
                <input type="submit" />
        </form>
    </>
  )
}

export default AddressForm