import './Filter.scss';
import line from '../img/Line.png';
import angle from '../img/angle.png';
import { useState } from 'react';

const Price =()=>{
    const[expandPrice,setExpandPrice] = useState<Boolean>(false);
    return(
        <div className="price">
        <div className="price-heading"
        onClick={()=>{setExpandPrice((value)=>!value)}}
            >PRICE RANGE
            <img className={expandPrice && "rotate"} src={angle}></img>
        </div>
        {expandPrice &&
        <>
        <div className="price-value">
            <input type="checkbox"></input>
            <label>Under 500</label>
        </div>
        <div  className="price-value">
            <input type="checkbox"></input>
            <label>1000 to 3000</label>
        </div>
        </>
        }
        <img src={line}></img>
    </div>
    )
}

export default Price;