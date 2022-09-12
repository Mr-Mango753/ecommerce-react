import React from 'react'
import useStyles from './styles'
import './ProductsStyles.css'

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles()

  return (
    <>
    <div class="py-5">
        <div class="row">
          <div class="col-lg-6 mb-3 mb-lg-0">
            <div class="hover hover-4 text-white rounded"><img src={product.imageURL} alt="" />
              <div class="hover-overlay"></div>
                  <p class="hover-4-description small">{product.description}</p>  
            </div>
          </div>
        </div>
    </div>
    <div className='flex-bottom'>
      <div className="cartAndName">
        <h1 className='productName'>{product.name}</h1><span><a onClick={() => onAddToCart(product.id)}></a></span>
      </div>
      <h5 className='product-price'>${product.price}</h5>
    </div>
    </>
  )
}

export default Product