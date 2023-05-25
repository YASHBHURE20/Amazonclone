import React from 'react';
import  "./checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [ {basket},] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
        <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW26takeover/mainpagePC/1_Amazon-Sub-banner-1500-x-400-Karigar.jpg' alt=''></img>

        
         {basket?.length === 0 ?(
            <div>
                <h2> YOUR SHOPPING BASKET IS EMPTY</h2>
                <p> You have no items in your basket . To buy one or "Add to the Basket" next to the item .</p>
            </div>
         ) : (
            <div>
                <h2 className='checkout_title'> YOUR SHOPPING BASKET</h2>

                {/*list out all the items */}
              

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
         )}
         </div>
         {basket.length > 0 && (
             <div className='checkout_right'>


             
             <Subtotal />

             </div>

         )}

    </div>
  );
}

export default Checkout;