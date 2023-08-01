
import './Filter.scss';
import line from '../img/Line.png';
import angle from '../img/angle.png';
import yellostar from '../img/Staryellow.svg';
import star from "../img/Star.svg";
import { useState } from 'react';

const Ratings = ()=>{
    const[expandRatings,setExpandRatings] = useState<Boolean>(false);
    return(
        <div className="ratings">
        <div className="ratings-heading"
         onClick={()=>{setExpandRatings((value)=>!value)}}
        >RATINGS
            <img className={expandRatings && "rotate"} src={angle}></img>
        </div>
        {expandRatings &&
        <>
        <div className="ratings-value">
            <input type="checkbox"></input>
            <img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={yellostar}/>
        </div>
        <div  className="ratings-value">
            <input type="checkbox"></input>
            <img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={star}/>
        </div>
        <div  className="ratings-value">
            <input type="checkbox"></input>
            <img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={star}/><img src={star}/>
        </div>
        <div  className="ratings-value">
            <input type="checkbox"></input>
            <img src={yellostar}/><img src={yellostar}/><img src={star}/><img src={star}/><img src={star}/>
        </div>
        <div  className="ratings-value">
            <input type="checkbox"></input>
            <img src={yellostar}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/>
        </div>
        </>
        }
        <img src={line}></img>
    </div>
    )
}

export default Ratings;