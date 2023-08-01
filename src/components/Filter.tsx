import './Filter.scss';
import Brand from './Brand';
import Price from './Price';
import Ratings from './Ratings';

const Filter = ()=>{
    
  
    return(
        <div className="filter">
              <Brand/>
              <Price/>
              <Ratings/>
            </div>
    )
}

export default Filter;