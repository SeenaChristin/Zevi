import './Header.scss';
import '../index.scss';
import './Products.scss';
import { ProductItem} from "../FakeData";
import { useState } from "react";
import Rating from "./Rating";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface ProductItemProps {
    product: ProductItem
}

const Product = ({product}: ProductItemProps)=>{
    const [isInWishlist, setIsInWishlist] = useState(false);
    return(
        <div className="product-details" key={product.prdName}>
            <div className="wishlist-icon-container">
                {isInWishlist ? (
                    <AiFillHeart
                    color="red"
                    onClick={() => setIsInWishlist((prev) => !prev)}
                    />
                ) : (
                    <AiOutlineHeart
                    color="red"
                    onClick={() => setIsInWishlist((prev) => !prev)}
                    />
                )}
            </div>
            <div>
                <img className="product-img" src={product.prdImg}></img>
            </div>
            <div>
                <div className="product-name">{product.prdName}</div>
            </div>
            <div>
                <span className="product-orgprice">Rs.{product.prdOriginalPrice}</span>
                <span className="product-discprice">Rs.{product.prdDiscountPrice}</span>
            </div>
            <Rating value={parseInt(product.prdRatings)}></Rating>
        </div>
    )
}

export default Product;