import Header from "./Header";
import './Header.scss';
import '../index.scss';
import './Products.scss';
import Filter from "./Filter";
import { ProductItem, getProducts} from "../FakeData";
import { useState } from "react";
import Product from "./Product";
import ProductContext from "../ProductContext";

const Products = ()=>{
    const products:ProductItem[] = getProducts();
    const[productList,setProductList] = useState<ProductItem[]>(products);
   
    return(
        <ProductContext.Provider value={{
            productList: productList,
            setProductList: setProductList
          }}>
        <div className="products-wrapper">
        <div className="products" >
        <Header/>
        </div>
        <div className="search-heading">Search Results</div>
        <div className="search-cont"> 
            <Filter/>
            <div className="product-items">
            {productList.map((product)=>(
                <Product product={product}></Product>
            ))}
            </div>
        </div>
        </div>
        </ProductContext.Provider>
    )
}

export default Products;