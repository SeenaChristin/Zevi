import searchIcon from '../img/search.svg';
import logo from '../img/logo.png';
import React from 'react';
import './Header.scss';

interface HeaderProps {
    setSearchClick?: React.Dispatch<React.SetStateAction<Boolean>>;
}

const Header = (props: HeaderProps)=>{
    const {setSearchClick} = props;
    return(
        <>
        <div className='logo-cont'>
        <img src={logo}></img>
        </div>  
        <form className="input-box">
          <input
            type="text"
            className="home-input"
            placeholder="Search"
            onClick ={()=>{
                setSearchClick && setSearchClick((value:Boolean)=>!value);
            }}
          />
          <img src={searchIcon}></img>
        </form>
        </>
    )
}

export default Header;