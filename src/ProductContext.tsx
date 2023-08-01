import { createContext } from "react";
import { ProductItem, getProducts} from "./FakeData";

export interface ProductContextType{
    productList : ProductItem[];
    setProductList: React.Dispatch<React.SetStateAction<ProductItem[]>>; 
}

const products:ProductItem[] = getProducts();

const ProductContext = createContext<ProductContextType | null>(null);

export default ProductContext;