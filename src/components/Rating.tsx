
import './Filter.scss';
import yellostar from '../img/Staryellow.svg';
import star from "../img/Star.svg";
import { useState } from 'react';

interface RatingProps {
    value: number;
}

const Rating = ({value}: RatingProps)=>{
    let ratingArr = new Array(value);
    ratingArr.fill(true, 0, value);
    let defaultRatingArr = new Array(5 - value);
    defaultRatingArr.fill(true, 0, 5-value);
    console.log('ratingArr', ratingArr.length);
    return(
        <div>
        <span>{ratingArr.map((item) => {return <img src={yellostar} />})}</span>
        <span>{defaultRatingArr.map((item) => {return <img src={star} />})}</span>
        </div>
    )
}

export default Rating;