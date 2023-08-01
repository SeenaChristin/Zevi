import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import homeBg from './img/home_bg.png';
import searchIcon from './img/search.svg'
import logo from './img/logo.png'
import Suggestions from './components/Suggestions';



const AppLayout = () =>{
    const[searchClick, setSearchClick] = useState(false);
    return(
        <div style={{ backgroundImage: `url(${homeBg})` }} className='main'>  
         <div className='logo-cont'>
        <img src={logo}></img>
        </div>  
        <form className="input-box">
          <input
            type="text"
            className="home-input"
            placeholder="Search"
            onClick ={()=>{
                setSearchClick((value)=>!value);
            }}
          />
          <img src={searchIcon}></img>
        </form>
        {searchClick && <Suggestions/>}
        </div>
    )
};

const root = document.getElementById('container');
ReactDOM.render(<AppLayout/>,root);