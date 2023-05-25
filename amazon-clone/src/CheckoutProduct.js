import React from 'react';
import './checkoutproduct.css';
import { useStateValue } from './StateProvider';


function CheckoutProduct({id, title, image, price, rating}) {
   
   const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove from basket...

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,

        });
    }

  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct_image' src={image} alt=""/>

        <div className='checkoutproduct_info'>
            <p className='checkoutproduct_title'> {title} </p>

            <p className='checkoutproduct_price'>
            <small> Rs </small>
            <strong>{price}</strong>
            </p>

            <div className='product_rating'>
                {Array(rating)
                .fill()
                .map( (_, i) => (
                    <p>⭐</p>
                ))}

             </div>

             <button onClick={removeFromBasket}> REMOVE FROM BASKET</button>

        </div>

    </div>
  )
}

export default CheckoutProduct