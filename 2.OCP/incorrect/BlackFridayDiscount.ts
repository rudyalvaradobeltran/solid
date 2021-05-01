export class BlackFridayDiscount{
    apply(price : number): number {
        return price * 0.333;
    }
}