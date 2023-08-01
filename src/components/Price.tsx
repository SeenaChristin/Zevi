import './Filter.scss';
import line from '../img/Line.png';
import angle from '../img/angle.png';
import { useState, useContext } from 'react';
import ProductContext from '../ProductContext';
import { ProductContextType } from '../ProductContext';
import { ProductItem, getProducts} from "../FakeData";

const Price =()=>{
    const[expandPrice,setExpandPrice] = useState<Boolean>(false);
    const contxt = useContext<ProductContextType | null>(ProductContext);
    const productList = contxt?.productList;
    const setProductList = contxt?.setProductList;
    const handleClick =(el: React.ChangeEvent<HTMLInputElement>)=>{
        if(el.target.checked){
            let p1 = el.target.value.split('|')[0];
            let p2 = el.target.value.split('|')[1];
            let list = productList?.filter((product)=>{ return parseInt(product.prdDiscountPrice)<=(parseInt(p2))
                && parseInt(product.prdDiscountPrice)>=(parseInt(p1))
            });
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
        <div className="price">
        <div className="price-heading"
        onClick={()=>{setExpandPrice((value)=>!value)}}
            >PRICE RANGE
            <img className={expandPrice && "rotate"} src={angle}></img>
        </div>
        {expandPrice &&
        <>
        <div className="price-value">
            <input type="checkbox" value="0|1000"
             onChange={(el)=>handleClick(el)}
            ></input>
            <label>Under 1000</label>
        </div>
        <div  className="price-value">
            <input type="checkbox" value="1000|3000"
             onChange={(el)=>handleClick(el)}
            ></input>
            <label>1000 to 3000</label>
        </div>
        </>
        }
        <img src={line}></img>
    </div>
    )
}

export default Price;