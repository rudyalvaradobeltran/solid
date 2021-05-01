import { Discount } from './Discount';

export class GoldDiscount implements Discount {
    apply(price : number): number {
        return price-(price * 0.2);
    }
}