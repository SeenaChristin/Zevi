import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import homeBg from './img/home_bg.png';
import Suggestions from './components/Suggestions';
import Header from './components/Header';
import Products from './components/Products';



const AppLayout = () =>{

  const[searchClick, setSearchClick] = useState<Boolean>(false);
    return(
        <div style={{ backgroundImage: `url(${homeBg})` }} className='main'>  
         <Header setSearchClick={setSearchClick}/>
        {searchClick && <Suggestions/>}
        </div>
    )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path: "/products",
    element: <Products/>
  }
])

const root = document.getElementById('container');
ReactDOM.render(<RouterProvider router={appRouter}/>,root);