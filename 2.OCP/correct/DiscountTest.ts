import { BlackFridayDiscount } from "./BlackFridayDiscount";
import { DiscountManager } from "./DiscountManager";
import { GoldDiscount } from "./GoldDiscount";

export class DiscountTest {
    testDiscount(): void {
        var discountManager = new DiscountManager();
        var blackFridayDiscount = new BlackFridayDiscount();
        var goldDiscount = new GoldDiscount();
        const price = 9000;
        console.log('BlackFriday: '+discountManager.apply(price, blackFridayDiscount));
        console.log('Gold: '+discountManager.apply(price, goldDiscount));
    }
}