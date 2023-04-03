
import WebFont from 'webfontloader';

import Login from './components/User/Login';
import Register from './components/User/Register';
import { Routes, Route, useLocation } from 'react-router-dom';
import { loadUser } from './actions/userAction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';



import NotFound from './components/NotFound';
import AddCard from './components/Products/AddCard';
import AddBucket from './components/Products/AddBucket';
import Home from './components/Home';
// import './components/Home/Home.css'

function App() {

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,600,700"]
      },
    });
  });

  useEffect(() => {
    dispatch(loadUser());
    // getStripeApiKey();
  }, [dispatch]);

  // always scroll to top on route/path change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname])

  

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addcard" element={<AddCard/>} />
        <Route path="/addbucket" element={<AddBucket/>} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
