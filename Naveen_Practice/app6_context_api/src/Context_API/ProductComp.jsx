import React from 'react'
import { useContext } from 'react'
import { context } from './Context'

const ProductComp = () => {
   const contextDetails = useContext(context);
   console.log("context details - ",contextDetails);
  return (
    <div>
      Welcome to the product comp
      <p>Product Component - {contextDetails.fname}</p>
    </div>
  )
}

export default ProductComp
