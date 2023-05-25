import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import Checkout from "./checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  
   const[{basket, user}, dispatch] = useStateValue();

   useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser
        })

      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
       }
     });

     return () => {
      //Any clean up operation go in here 
      unsubscribe();
     }

   }, []);

    console.log(user);



  return (
    <Router>
      <div className="app">
      <Header />
       
       
        <Routes>
          <Route path="/checkout" element={<Checkout />}> </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}> </Route>
        </Routes>   
      </div>
    </Router>
  );
}

export default App;