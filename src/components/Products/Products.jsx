import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import './Products.css'

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <>
    <div className='products'>
    <main className={classes.content} fluid >
        <div className={classes.toolbar}/>
        <Grid container justifyContent='flex-start' noGutters fluid='true'>
            {products.map((product) => (
                <Grid item key={product.id} className={classes.product} noGutters fluid='true' xs={12} sm={6} md={4} lg={3} style={{paddingRight:'0px', paddingLeft:"0px", marginLeft: '0px', marginRight: '0px', paddingTop: '0px', marginTop: '0px'}}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}
        </Grid>
    </main>
    </div>
    </>
  )
}

export default Products