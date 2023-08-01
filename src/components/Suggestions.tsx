import { ReactNode } from 'react';
import {TrendItem, getLatestTrends, getPopularSuggestions} from '../FakeData';

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
                    <div className='latest-trend-item'>
                        <img src={item.prdImg} />
                        <div className='latestText'>{item.prdName}</div>   
                    </div>
                ))
            }
            </div>
            <h4>Popular Suggestions</h4>
            {popSuggs.map(item => <div className='suggText'>{item}</div>)}
        </div>
    )
}

export default Suggestions;