import { faker } from '@faker-js/faker';

export interface TrendItem {
    prdImg : string;
    prdName : string;
}

export interface ProductItem {
    prdImg : string;
    prdName : string;
    prdOriginalPrice : string;
    prdDiscountPrice : string;
    prdRatings : string;
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

export const getProducts = ():ProductItem[] => {
    let productsArr: ProductItem[]= [];
    for(let i=0; i<40; i++){
        productsArr.push({
            prdImg: faker.image.urlLoremFlickr({width: 300, height: 400, category: 'nature'}),
            prdName: faker.commerce.productName(),
            prdOriginalPrice: faker.commerce.price({ min: 3000, max: 5000 }),
            prdDiscountPrice: faker.commerce.price({ min: 200, max: 2500 }),
            prdRatings: faker.commerce.price({ min: 0, max: 5 })
        })
    }
    return productsArr;
};