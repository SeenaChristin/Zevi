import './Filter.scss';
import line from '../img/Line.png';
import angle from '../img/angle.png';
import { useState } from 'react';

const Brand = ()=>{
    const[expandBrand,setExpandBrand] = useState<Boolean>(false);
    return(
        <div className="brand">
        <div className="brand-heading" 
        onClick={()=>{setExpandBrand((value)=>!value)}}
        >BRAND
            <img className={expandBrand && "rotate"}src={angle}></img>
        </div>
        {expandBrand &&
        <>
        <div className="brand-name">
            <input type="checkbox"></input>
            <label>Adidas</label>
        </div>
        <div  className="brand-name">
            <input type="checkbox"></input>
            <label>Soch</label>
        </div>
        </> 
        }
        <img src={line}></img>
    </div>
    )
}

export default Brand;