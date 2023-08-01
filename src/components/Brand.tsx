import './Filter.scss';
import line from '../img/Line.png';
import angle from '../img/angle.png';
import { useState, useContext } from 'react';
import ProductContext from '../ProductContext';
import { ProductContextType } from '../ProductContext';
import { ProductItem, getProducts} from "../FakeData";

const Brand = ()=>{
    const[expandBrand,setExpandBrand] = useState<Boolean>(false);
    const contxt = useContext<ProductContextType | null>(ProductContext);
    const productList = contxt?.productList;
    const setProductList = contxt?.setProductList;

    const handleClick =(el: React.ChangeEvent<HTMLInputElement>)=>{
        if(el.target.checked){
            let list = productList?.filter((product)=>{return product.prdName.includes("Chicken")});
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
        <div className="brand">
            <div className="brand-heading" 
            onClick={()=>{setExpandBrand((value)=>!value)}}
            >BRAND
                <img className={expandBrand && "rotate"}src={angle}></img>
            </div>
            {expandBrand &&
            <>
                <div className="brand-name">
                    <input type="checkbox" value="Adidas"
                    onChange={(el)=>handleClick(el)}
                    ></input>
                    <label>Adidas</label>
                </div>
                <div  className="brand-name">
                    <input type="checkbox" value="Soch"
                    onChange={(el)=>handleClick(el)}
                    ></input>
                    <label>Soch</label>
                </div>
            </> 
            }
            <img src={line}></img>
        </div>
    )
}

export default Brand;