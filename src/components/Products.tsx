import Header from "./Header";
import './Header.scss';
import '../index.scss';
import './Products.scss';
import Filter from "./Filter";

const Products = ()=>{
    return(
        <div className="products-wrapper">
        <div className="products" >
        <Header/>
        </div>
        <div className="search-heading">Search Results</div>
        <div className="search-cont"> 
            <Filter/>
            <div className="product-items"></div>
        </div>
        </div>
    )
}

export default Products;