import { Discount } from './Discount';

export class DiscountManager{
    apply(price : number, discount : Discount){
        return discount.apply(price);
    }
}