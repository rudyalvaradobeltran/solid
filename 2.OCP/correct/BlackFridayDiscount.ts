import { Discount } from './Discount';

export class BlackFridayDiscount implements Discount{
    apply(price : number): number{
        return price-(price * 0.333);
    }
}