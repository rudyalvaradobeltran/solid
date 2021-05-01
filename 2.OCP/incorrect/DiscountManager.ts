import { Discount } from './Discount';
import { GoldDiscount } from './GoldDiscount';
import { BlackFridayDiscount } from './BlackFridayDiscount';

export class DiscountManager{
    apply(price : number, discount : Discount){
        return discount.apply(price);
    }

    applyGold(price : number, discount : GoldDiscount){
        return discount.apply(price);
    }

    applyBlackFriday(price : number, discount : BlackFridayDiscount){
        return discount.apply(price);
    }
}