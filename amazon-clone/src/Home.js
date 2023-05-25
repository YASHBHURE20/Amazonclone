import React from 'react';
import Product from './product';
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      
        <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg'
        alt=''  />
        



        {/*Product ID ,Title and all */}

        <div className='home_row'>
        <Product 
        id="0001"
        title="Voltas 1.5 ton Premium AC"
        price={35000}
        rating={5}
        image="https://m.media-amazon.com/images/I/41Dd4+t6fsL._AC_SY135_.jpg"
        />
        

        <Product 
        id="0002"
        title="Vega Men X2 Beard Trimmer For Men With Quick Charge"
        price={1077}
        rating={5}
        image="https://m.media-amazon.com/images/I/71Rkg2DQRuL._SL1080_.jpg"
        />
        </div>


        <div className='home_row'>
        <Product 
        id="0003"
        title="Bourge Mens Vega-m1 Running Shoes"
        price={699}
        rating={4}
        image="https://m.media-amazon.com/images/I/81WSHNa9VZL._UL1500_.jpg"
        />

        <Product 
        id="0004"
        title="Apple iPhone 14 (128 GB) - Purple"
        price={68999}
        rating={5}
        image="https://m.media-amazon.com/images/I/619f09kK7tL._SL1500_.jpg"
        />
        
        
        <Product 
        id="0005"
        title="ANNI DESIGNER Women's Cotton Blend..."
        price={469}
        rating={3}
        image="https://m.media-amazon.com/images/I/61q-JREtrAL._UL1440_.jpg"
        />
        </div>


        <div className='home_row'>
        <Product 
        id="0006"
        title="Home Furnishing"
        price={35000}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BVD/HD_-_PC_-_REC.gif"
        />
        
        </div>
       
    </div>
  )
}

export default Home