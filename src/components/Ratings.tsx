
import './Filter.scss';
import line from '../img/Line.png';
import angle from '../img/angle.png';
import yellostar from '../img/Staryellow.svg';
import star from "../img/Star.svg";
import { useState, useContext } from 'react';
import ProductContext from '../ProductContext';
import { ProductContextType } from '../ProductContext';
import { ProductItem, getProducts} from "../FakeData";

const Ratings = ()=>{
    const[expandRatings,setExpandRatings] = useState<Boolean>(false);
    const contxt = useContext<ProductContextType | null>(ProductContext);
    const productList = contxt?.productList;
    const setProductList = contxt?.setProductList;

    const handleClick =(el: React.ChangeEvent<HTMLInputElement>)=>{
        if(el.target.checked){
            let list = productList?.filter((product)=>{return parseInt(product.prdRatings)== parseInt(el.target.value)});
            if(list!=undefined && setProductList!=undefined) {
                setProductList(list);
            }
        }
        else{
            if(setProductList!=undefined) {
                setProductList(getProducts());
            }
           
        }
    }

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
            <input type="checkbox" value='5'
             onChange={(el)=>handleClick(el)}
            ></input>
            <img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={yellostar}/>
        </div>
        <div  className="ratings-value">
            <input type="checkbox"  value='4'
            onChange={(el)=>handleClick(el)}
            ></input>
            <img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={star}/>
        </div>
        <div  className="ratings-value">
            <input type="checkbox"  value='3'
            onChange={(el)=>handleClick(el)}
            ></input>
            <img src={yellostar}/><img src={yellostar}/><img src={yellostar}/><img src={star}/><img src={star}/>
        </div>
        <div  className="ratings-value">
            <input type="checkbox"  value='2'
            onChange={(el)=>handleClick(el)}
            ></input>
            <img src={yellostar}/><img src={yellostar}/><img src={star}/><img src={star}/><img src={star}/>
        </div>
        <div  className="ratings-value">
            <input type="checkbox"  value='1'
            onChange={(el)=>handleClick(el)}
            ></input>
            <img src={yellostar}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/>
        </div>
        </>
        }
        <img src={line}></img>
    </div>
    )
}

export default Ratings;