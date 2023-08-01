import { faker } from '@faker-js/faker';

export interface TrendItem {
    prdImg : string;
    prdName : string;
}

export const getLatestTrends = ():TrendItem[] => {
    let trendsArr: TrendItem[]= [];
    for(let i=0; i<5; i++){
        trendsArr.push({
            prdImg: faker.image.urlLoremFlickr({width: 300, height: 400, category: 'People'}),
            prdName: faker.commerce.productName(),
        })
    }
    return trendsArr;
};

export const getPopularSuggestions = ():string[] => {
    let popSugg: string[] = [];
    for(let i=0; i<5; i++){
        popSugg.push(faker.commerce.productName())
    }
    return popSugg;
};