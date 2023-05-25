import React from 'react';
import  "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {

    const[ {basket, user}] = useStateValue();
    const login = () => {

      if(user){
        auth.signOut();
      }
    };

  return (
    <nav className='header'>
        {/*logo on the left */}
        <Link to="/">
        <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt='' />

        </Link>
        
         {/*search box */}
         <div className='header_search'>
         <input type='text' className='header_searchinput' />
         <SearchIcon className='header_searchicon' />
         </div>

         {/*link 3 */}
         <div className='header_nav'>
            <Link to={!user && "/login"} className='header_link'>
                <div onClick={login} className='header_option'>
                <span className='headeroptionlineone'> Hello {user?.email} </span>
                <span className='headeroptionlinetwo'>{ user ? 'Sign Out' : 'sign In'}</span>
                </div>

            </Link>



            <Link to="/" className='header_link'>
                <div className='header_option'>
                <span className='headeroptionlineone'> Returns </span>
                <span className='headeroptionlinetwo'>& Orders</span>
                </div>

            </Link>




            <Link to="/" className='header_link'>
                <div className='header_option'>
                <span className='headeroptionlineone'> Your </span>
                <span  className='headeroptionlinetwo'>Prime </span>
                </div>

            </Link>

         </div>
          {/*basket with numbers */}

        <Link to="/checkout" className='header_link'>
            <div className='headeroptionbasket'>
                <ShoppingBasketIcon />




               <span className='headeroptionlinetwo header_basketcount'>{basket?.length}</span>
            </div>
          </Link>
    </nav>
  )
}

export default Header
