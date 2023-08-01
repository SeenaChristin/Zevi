import { ReactNode } from 'react';
import {TrendItem, getLatestTrends, getPopularSuggestions} from '../FakeData';
import { Link } from 'react-router-dom';

import "./Suggestions.scss";

const Suggestions = ():ReactNode=>{
    const latestTrends : TrendItem[] = getLatestTrends();
    const popSuggs : string[] = getPopularSuggestions();
    return(
        <div className='suggestion-wrapper'>
            <h4>Latest Trends</h4>
            <div className='latest-trends-wrapper'>
                {
                latestTrends.map(item => (
                   <Link to="/products"> <div className='latest-trend-item'>
                        <img src={item.prdImg} />
                        <div className='latestText'>{item.prdName}</div>   
                    </div></Link>
                ))
            }
            </div>
            <h4>Popular Suggestions</h4>
            {popSuggs.map(item => <Link to="/products"><div className='suggText'>{item}</div></Link>)}
        </div>
    )
}

export default Suggestions;